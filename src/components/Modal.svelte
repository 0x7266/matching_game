<div class="modal-background">
	<div class="backdrop" />
	<div class="modal-content">
		<slot />
	</div>
</div>

<style>
	.modal-background {
		backdrop-filter: blur(10px);
		display: grid;
		height: 100%;
		inset: 1px;
		place-items: center;
		position: fixed;
		width: 100%;
		z-index: 10;
	}

	.backdrop {
		position: fixed;
		background-color: rgba(0, 0, 0, 0.9);
		height: 100%;
		width: 100%;
	}

	.modal-content {
		z-index: 100;
	}
</style>
