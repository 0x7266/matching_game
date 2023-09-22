<script lang="ts">
	import { get_emoji_svg } from "../lib/get_emoji_svg";

	export let emoji: string, selected: boolean, found: boolean;
</script>

<div class="cell" class:flipped={selected}>
	<button on:click />
	{#if !found}
		<img src={get_emoji_svg(emoji)} alt={emoji} />
	{/if}
</div>

<style>
	.cell {
		align-items: center;
		aspect-ratio: 1/1;
		display: flex;
		background-color: #b675c7;
		justify-content: center;
		position: relative;
	}

	button {
		height: 100%;
		position: absolute;
		width: 100%;
	}

	img {
		width: 70%;
		z-index: 2;
		pointer-events: none;
	}

	.flipped button {
		background-color: red;
	}
</style>
