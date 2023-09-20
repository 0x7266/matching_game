<script lang="ts">
	import Cell from "./Cell.svelte";

	export let grid: string[];
	let reset_timeout: number;

	let card_1 = -1;
	let card_2 = -1;
</script>

<div class="grid">
	{#each grid as emoji, index}
		<Cell
			{emoji}
			on:click={() => {
				if (card_1 === -1 && card_2 === -1) {
					// clear the timeout when another card is selecting during the current timeout
					clearTimeout(reset_timeout);
					card_1 = index;
				} else if (card_2 === -1) {
					card_2 = index;
					if (grid[card_1] === grid[card_2]) {
						// correct
					} else {
						// timeout so the cards flip back to initial state after 1200 ms
						reset_timeout = setTimeout(() => {
							card_1 = -1;
							card_2 = -1;
						}, 1200);
					}
				} else {
					card_1 = index;
					card_2 = -1;
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
