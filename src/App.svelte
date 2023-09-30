<script lang="ts">
	import { confetti } from "@neoconfetti/svelte";
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

{#if state === "won"}
	<div
		class="confetti"
		use:confetti={{
			stageWidth: innerWidth,
			stageHeight: innerHeight,
		}}
	/>
{/if}

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
		gap: 1em;
	}

	.confetti {
		height: 100%;
		left: 50%;
		pointer-events: none;
		position: fixed;
		top: 30%;
		width: 100%;
	}
</style>
