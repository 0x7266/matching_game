<script lang="ts">
	export let found: string[];
</script>

{#each found as emoji (emoji)}
	<span>{emoji}</span>
{/each}
