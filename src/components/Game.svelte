<script lang="ts">
	import Grid from "./Grid.svelte";
	import { levels } from "../lib/levels";
	import { create_grid } from "../lib/create_grid";
	import Found from "./Found.svelte";
	import Countdown from "./Countdown.svelte";

	const level = levels[0];

	let size = level.size;
	let grid = create_grid(level);
	let found = [];
</script>

<main class="game">
	<div class="info">
		<Countdown duration={level.duration} remaining={level.duration} />
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
