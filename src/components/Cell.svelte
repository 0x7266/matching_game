<script lang="ts">
	export let emoji: string, selected: boolean, found: boolean;
</script>

<div class="cell" class:flipped={selected}>
	<button on:click />
	{#if !found}
		<span>{emoji}</span>
	{/if}
</div>

<style>
	.cell {
		align-items: center;
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

	span {
		font-size: 6em;
		z-index: 2;
		pointer-events: none;
	}

	.flipped button {
		background-color: red;
	}
</style>
