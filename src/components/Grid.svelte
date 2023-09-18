<script lang="ts">
	import Cell from "./Cell.svelte";

	export let grid: string[];
</script>

<div class="grid">
	{#each grid as emoji}
		<Cell {emoji} />
	{/each}
</div>

<style>
	.grid {
		display: grid;
		gap: 0.5em;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		height: 100%;
	}
</style>
