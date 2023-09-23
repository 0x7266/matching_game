<script lang="ts">
	import { get_emoji_svg } from "../lib/get_emoji_svg";

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<img src={get_emoji_svg(emoji)} alt={emoji} />
	{/each}
</div>

<style>
	.found {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: 100%;
		gap: 1em;
	}
	img {
		width: 2em;
	}

	@media (max-width: 1075px) {
		.found {
			flex-direction: row;
			margin: 0 auto;
		}
	}
</style>
