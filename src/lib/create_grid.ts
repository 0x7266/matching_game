import type { Level } from "./levels";

export function create_grid(level: Level) {
	let cards = new Set<string>();
	let maxSize = (level.size * level.size) / 2;

	while (cards.size < maxSize) {
		let randomIndex = Math.floor(Math.random() * level.emojis.length);
		cards.add(level.emojis[randomIndex]);
	}
	return shuffle([...cards, ...cards]);
}

function shuffle(cards: string[]) {
	return cards.sort(() => Math.random() - 0.5);
}
