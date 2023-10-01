<script lang="ts">
	import { confetti } from "@neoconfetti/svelte";
	import Game from "./components/Game.svelte";
	import Modal from "./components/Modal.svelte";
	import { levels } from "./lib/levels";

	let state: "waiting" | "playing" | "paused" | "won" | "lost" = "waiting";
	let game: Game;
</script>

<Game
	bind:this={game}
	on:play={() => {
		state = "playing";
	}}
	on:pause={() => {
		state = "paused";
	}}
	on:win={() => {
		state = "won";
	}}
	on:lose={() => {
		state = "lost";
	}}
/>

{#if state !== "playing"}
	<Modal>
		<div class="modal-content">
			<h1>MATCHING GAME</h1>
			{#if state === "won" || state === "lost"}
				<p>you {state} the game</p>
			{:else if state === "paused"}
				<p>game paused</p>
			{:else if state === "waiting"}
				<p>choose a level</p>
			{/if}

			<div class="buttons">
				{#if state === "paused"}
					<button
						on:click={() => {
							state = "playing";
						}}>RESUME</button
					>
					<button>QUIT</button>
				{:else}
					{#each levels as level}
						<button on:click={() => game.start(level)}>{level.label}</button>
					{/each}
				{/if}
			</div>
		</div>
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

	p {
		color: var(--text);
		font-size: 1.8em;
	}

	.buttons {
		display: flex;
		justify-content: center;
		gap: 1em;
		width: 100%;
	}

	button {
		background-color: var(--primary);
		border: none;
		border-radius: 0.4em;
		color: var(--text);
		font-size: 2em;
		padding: 0.3em 0.7em;
	}

	.modal-content {
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
