<script lang="ts">
	export let remaining: number, duration: number;
</script>

<div class="countdown">
	<button
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<title>Pause</title>
			<path
				style="fill: var(--color-3); stroke: transparent"
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
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 1em;
		height: 100%;
		justify-content: center;
		width: 100%;
	}

	button {
		aspect-ratio: 1/1;
		background-color: transparent;
		border: none;
		position: relative;
		width: 6.5em;
	}

	svg {
		left: 0;
		position: absolute;
		top: 0;
	}

	.duration {
		background-color: var(--color-2);
		flex: 1;
		width: 10px;
		position: relative;
		height: 100%;
		rotate: 180deg;
	}

	.remaining {
		background-color: var(--color-3);
		position: absolute;
		width: 100%;
		height: calc(100% * var(--p));
	}

	@media (max-width: 1075px) {
		.countdown {
			flex-direction: row;
			margin: 0 auto;
		}

		.duration {
			height: 10px;
			rotate: 360deg;
		}

		.remaining {
			height: 100%;
			width: calc(100% * var(--p));
		}
	}

	@media (max-width: 650px) {
		button {
			width: 60px;
		}
	}
</style>
