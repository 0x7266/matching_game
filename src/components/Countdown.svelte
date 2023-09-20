<script lang="ts">
	export let remaining: number, duration: number;
</script>

<div class="countdown">
	<button
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<title>Pause</title>
			<path
				style="fill: #777; stroke: transparent"
				d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
			/>
		</svg>
	</button>
	<div class="duration">
		<div class="remaining" />
	</div>
</div>

<style>
	.countdown {
		align-items: center;
		display: flex;
		gap: 1em;
		height: 100%;
	}

	button {
		aspect-ratio: 1/1;
		background-color: transparent;
		border: none;
		height: 100%;
		position: relative;
	}

	svg {
		left: 0;
		position: absolute;
		top: 0;
	}

	.duration {
		background-color: #ccc;
		flex: 1;
		height: 1em;
		position: relative;
		width: 100%;
	}

	.remaining {
		background-color: #999;
		height: 100%;
		position: absolute;
	}
</style>
