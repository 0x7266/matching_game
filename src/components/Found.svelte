<script lang="ts">
	import { get_emoji_svg } from "../lib/get_emoji_svg";
	import { receive } from "../lib/transitions";

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<img in:receive={{ key: emoji }} src={get_emoji_svg(emoji)} alt={emoji} />
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
	}
	img {
		width: 2em;
	}
</style>
