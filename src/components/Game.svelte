<script lang="ts">
	import Grid from "./Grid.svelte";
	import { levels, type Level } from "../lib/levels";
	import { create_grid } from "../lib/create_grid";
	import Found from "./Found.svelte";
	import Countdown from "./Countdown.svelte";
	import { createEventDispatcher, onMount } from "svelte";

	const dispatch = createEventDispatcher();

	let size: number;
	let grid: string[] = [];
	let found: string[] = [];
	let duration: number;
	let remaining: number;
	let playing: boolean;

	function countdown() {
		let start = Date.now();
		let remaining_at_start = remaining;
		function loop() {
			if (!playing) return;
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (Date.now() - start);

			if (remaining <= 0) {
				playing = false;
				dispatch("lose");
			}
		}
		loop();
	}

	export function start(level: Level) {
		size = level.size;
		grid = create_grid(level);
		remaining = duration = level.duration;
		resume();
	}

	export function resume() {
		playing = true;
		countdown();
		dispatch("play");
	}
</script>

<main class="game" style="--size: {size}">
	<div class="info">
		{#if playing}
			<Countdown
				{duration}
				{remaining}
				on:click={() => {
					playing = false;
					dispatch("pause");
				}}
			/>
		{/if}
	</div>
	<div class="grid">
		<Grid
			on:found={(e) => {
				found = [...found, e.detail.emoji];
				if (found.length === (size * size) / 2) {
					dispatch("win");
				}
			}}
			{grid}
			{found}
		/>
	</div>
	<div class="info">
		<Found {found} />
	</div>
</main>

<style>
	.game {
		align-items: center;
		display: flex;
		flex-direction: column;
		font-size: min(1vmin, 0.5rem);
		gap: 5em;
		height: 100%;
		justify-content: center;
	}

	.info {
		height: 10em;
		width: 80em;
	}

	.grid {
		display: grid;
		gap: 0.5em;
		grid-template-columns: repeat(var(--size), 1fr);
		grid-template-rows: repeat(var(--size), 1fr);
		height: 80em;
		perspective: 100dvw;
		width: 80em;
	}
</style>
