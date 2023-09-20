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
		justify-content: center;
		height: 100%;
	}
	span {
		font-size: 3em;
	}
</style>
