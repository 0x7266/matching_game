<script lang="ts">
	import Cell from "./Cell.svelte";

	export let grid: string[];

	let card_1 = -1;
	let card_2 = -1;
</script>

<div class="grid">
	{#each grid as emoji, index}
		<Cell
			{emoji}
			on:click={() => {
				if (card_1 === -1 && card_2 === -1) {
					card_1 = index;
				}
			}}
			selected={card_1 === index || card_2 === index}
		/>
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
