<div class="modal-background">
	<div class="modal-content">
		<slot />
	</div>
</div>

<style>
	.modal-background {
		backdrop-filter: blur(10px);
		display: grid;
		height: 100%;
		place-items: center;
		position: fixed;
		width: 100%;
		z-index: 10;
	}
</style>
