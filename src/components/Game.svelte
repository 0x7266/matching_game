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
	<div class="grid-container">
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
		gap: 1.5em;
		height: 100dvh;
		justify-content: center;
	}

	.info {
		height: 80vmin;
		width: 10vmin;
	}

	.grid-container {
		height: 80vmin;
		width: 80vmin;
	}

	@media (max-width: 1075px) {
		.game {
			flex-direction: column;
			max-width: 60dvw;
			margin: 0 auto;
			padding-top: 2.5dvh;
		}

		.info {
			height: 10vmin;
			width: 100%;
		}

		.grid-container {
			min-width: fit-content;
		}
	}
</style>
