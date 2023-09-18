<script lang="ts">
	import Grid from "./Grid.svelte";
</script>

<main class="game">
	<div class="info">TODO</div>
	<div class="grid-container">
		<Grid />
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
