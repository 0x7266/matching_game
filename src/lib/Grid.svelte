<script>
	import Cell from "./Cell.svelte";
</script>

<div class="grid">
	{#each Array(16) as _}
		<Cell />
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
