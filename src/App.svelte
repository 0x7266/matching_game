<script lang="ts">
	import Game from "./components/Game.svelte";
	import Modal from "./components/Modal.svelte";

	let state: "waiting" | "playing" | "paused" | "won" | "lost" = "waiting";
</script>

{#if state !== "playing"}
	<Modal>
		<h1>MATCHING GAME</h1>
		{#if state === "waiting"}
			<div class="waiting">
				<p>CHOOSE A LEVEL</p>
				<div class="levels">
					<button>EASY</button>
					<button>MEDIUM</button>
					<button>HARD</button>
				</div>
			</div>
		{/if}
	</Modal>
{/if}
<Game />

<style>
	h1 {
		color: var(--accent);
		font-size: 5em;
		font-family: "Grandstander";
	}

	.waiting {
		align-items: center;
		display: flex;
		flex-direction: column;
		gap: 2em;

		& p {
			color: var(--text);
			font-size: 2em;
			font-weight: bold;
		}

		& .levels {
			display: flex;
			gap: 1em;
			width: 100%;
		}

		& button {
			background-color: var(--primary);
			border: none;
			border-radius: 0.4em;
			color: var(--text);
			font-size: 2em;
			padding: 0.3em 0.7em;
		}
	}
</style>
