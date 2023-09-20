<script lang="ts">
	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<span>{emoji}</span>
	{/each}
</div>

<style>
	.found {
		align-items: center;
		display: flex;
		flex-direction: column;

		justify-content: center;
		height: 100%;
	}
	span {
		font-size: 3em;
	}

	@media (max-width: 1075px) {
		.found {
			flex-direction: row;
			margin: 0 auto;
			width: 80vmin;
		}
	}
</style>
