<script lang="ts">
	import { get_emoji_svg } from "../lib/get_emoji_svg";

	export let emoji: string, selected: boolean, found: boolean;
</script>

<button
	class="cell"
	on:click
	disabled={selected || found}
	class:flipped={selected || found}
>
	<img alt={emoji} src={get_emoji_svg(emoji)} />
</button>

<style>
	.cell {
		align-items: center;
		display: flex;
		justify-content: center;
		position: relative;
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
		border-radius: 0.5em;
		display: flex;
		height: 100%;
		justify-content: center;
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

	img {
		display: block;
		font-size: 4em;
		height: 1em;
		line-height: 1;
		pointer-events: none;
		width: 1em;
	}
</style>
