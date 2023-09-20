<script lang="ts">
	import Grid from "./Grid.svelte";
	import { levels } from "../lib/levels";
	import { create_grid } from "../lib/create_grid";

	const level = levels[0];

	let size = level.size;
	let grid = create_grid(level);
	let found = [];
</script>

<main class="game">
	<div class="info">TODO</div>
	<div class="grid-container">
		<Grid
			{grid}
			on:found={(e) => {
				found = [...found, e.detail.emoji];
			}}
		/>
	</div>
	<div class="info">TODO</div>
</main>

<style>
	.game {
		display: grid;
		place-content: center;
		height: 100dvh;
	}
	.info {
		background-color: rgb(70, 11, 70);
		height: 10vmin;
		width: 80vmin;
	}
	.grid-container {
		background-color: #704585;
		height: 80vmin;
		width: 80vmin;
	}
</style>
