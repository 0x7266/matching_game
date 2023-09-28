<script lang="ts">
	import { get_emoji_svg } from "../lib/get_emoji_svg";
	import { receive } from "../lib/transitions";

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<div class="pair">
			<img
				in:receive={{ key: `${emoji}-a` }}
				src={get_emoji_svg(emoji)}
				alt={emoji}
			/>
			<img
				in:receive={{ key: `${emoji}-b` }}
				src={get_emoji_svg(emoji)}
				alt={emoji}
			/>
		</div>
	{/each}
</div>

<style>
	.found {
		align-items: center;
		display: flex;
		font-size: 2em;
		justify-content: center;
		height: 100%;
		gap: 1em;
		border: solid 1px var(--color-3);
		border-radius: 0.5em;
		background-color: var(--color-2);
	}

	.pair {
		position: relative;
		width: 2em;
		height: 2em;
	}

	img {
		position: absolute;
	}
</style>
