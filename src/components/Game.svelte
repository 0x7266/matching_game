<script lang="ts">
	import Grid from "./Grid.svelte";
	import { levels } from "../lib/levels";
	import { create_grid } from "../lib/create_grid";
	import Found from "./Found.svelte";
	import Countdown from "./Countdown.svelte";
	import { onMount } from "svelte";

	const level = levels[0];

	let size = level.size;
	let grid = create_grid(level);
	let found = [];
	let remaining: number = level.duration;
	let duration: number = level.duration;
	let playing: boolean = false;
	function countdown() {
		let start = Date.now();
		let remaining_at_start = remaining;
		function loop() {
			if (playing) return;
			requestAnimationFrame(loop);

			remaining = remaining_at_start - (Date.now() - start);

			if (remaining <= 0) {
				// TODO: game has been lost
				playing = true;
			}
		}
		loop();
	}

	onMount(countdown);
</script>

<main class="game">
	<div class="info">
		<Countdown duration={level.duration} {remaining} />
	</div>
	<div class="grid">
		<Grid
			on:found={(e) => {
				found = [...found, e.detail.emoji];
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
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		height: 80em;
		perspective: 100dvw;
		width: 80em;
	}
</style>
