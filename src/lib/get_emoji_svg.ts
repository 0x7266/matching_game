export function get_emoji_svg(emoji: string) {
	return `/twemoji/${[...emoji]
		.map((char) => char.codePointAt(0)!.toString(16))
		.join("-")}.svg`;
}
