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
		height: 100%;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
	}
</style>
