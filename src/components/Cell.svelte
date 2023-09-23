<script lang="ts">
	import { get_emoji_svg } from "../lib/get_emoji_svg";

	export let emoji: string, selected: boolean, found: boolean;
</script>

<div class="cell" class:flipped={selected || found}>
	<button on:click disabled={selected || found} />
	<div class="background" class:found />
	{#if !found}
		<img alt={emoji} src={get_emoji_svg(emoji)} />
	{/if}
</div>

<style>
	.cell {
		align-items: center;
		display: flex;
		justify-content: center;
		transform-style: preserve-3d;
		transform: rotateY(180deg);
		transition: filter 0.2s;
		transition: transform 0.4s;
		user-select: none;
		width: 100%;
		height: 100%;
	}

	.cell * {
		backface-visibility: hidden;
	}

	button {
		align-items: center;
		background: var(--color-2);
		border: none;
		border-radius: 1em;
		display: flex;
		height: 100%;
		justify-content: center;
		position: absolute;
		transform: rotateY(180deg);
		width: 100%;
		-webkit-tap-highlight-color: transparent;
	}

	button:disabled {
		color: inherit;
	}

	.flipped {
		transform: rotateY(0);
		z-index: 2;
	}

	.background {
		background: var(--color-1);
		border: 2px solid var(--color-3);
		border-radius: 1em;
		height: 100%;
		pointer-events: none;
		position: absolute;
		transition: border 0.2s;
		width: 100%;
	}

	.background.found {
		border: 2px solid var(--color-2);
	}

	img {
		display: block;
		font-size: 6em;
		height: 1em;
		line-height: 1;
		pointer-events: none;
		width: 1em;
		z-index: 2;
	}
</style>
