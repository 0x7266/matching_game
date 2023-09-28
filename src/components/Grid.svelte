<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import Cell from "./Cell.svelte";

	export let grid: string[], found: string[];

	let dispatch = createEventDispatcher();

	let reset_timeout: number;
	let card_1 = -1;
	let card_2 = -1;
</script>

{#each grid as emoji, index}
	<Cell
		on:click={() => {
			if (card_1 === -1 && card_2 === -1) {
				// clear the timeout when another card is selecting during the current timeout
				clearTimeout(reset_timeout);
				card_1 = index;
			} else if (card_2 === -1) {
				card_2 = index;
				if (grid[card_1] === grid[card_2]) {
					dispatch("found", { emoji });
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
		{emoji}
		selected={card_1 === index || card_2 === index}
		found={found.includes(emoji)}
		group={grid.indexOf(emoji) === index ? "a" : "b"}
	/>
{/each}
