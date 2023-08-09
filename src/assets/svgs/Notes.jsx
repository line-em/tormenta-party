// For the user to write extra info on their character, a quill

export default function Notes(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fill="var(--black)"
				d="M21 1.997c-15 0-17 14-18 20h1.998c.666-3.334 2.333-5.167 5.002-5.5c4-.5 7-4 8-7l-1.5-1l1-1c1-1 2.004-2.5 3.5-5.5Z"
			></path>
		</svg>
	);
}
