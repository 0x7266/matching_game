<script lang="ts">
	import { fade } from "svelte/transition";

	export let remaining: number, duration: number;
</script>

<div class="countdown" transition:fade={{ duration: 200 }}>
	<button on:click
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<title>Pause</title>
			<path
				style="fill: var(--primary); stroke: transparent"
				d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
			/>
		</svg>
	</button>
	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}" />
	</div>
</div>

<style>
	.countdown {
		display: flex;
		gap: 1em;
		align-items: center;
		justify-content: end;
		width: 100%;
		height: 100%;
	}

	button {
		font-size: max(8em, 2.4rem);
		width: 1.5em;
		aspect-ratio: 1;
		background: transparent;
		border: none;
		padding: 0;
	}

	button svg {
		display: block;
	}

	.duration {
		background-color: var(--secondary);
		border-radius: 5px;
		flex: 1;
		position: relative;
		height: 10px;
	}

	.remaining {
		background-color: var(--primary);
		border-radius: 5px;
		position: absolute;
		height: 100%;
		width: calc(100% * var(--p));
	}
</style>
