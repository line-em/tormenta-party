// Lightbulb

export default function Actions(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g fill="none">
				<path
					fill="var(--black)"
					d="M12 7a5 5 0 0 0-2 9.584V19h4v-2.416A5.001 5.001 0 0 0 12 7z"
				></path>
				<path
					stroke="var(--black)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M21 12h1m-3.5-6.5l1-1M12 3V2M5.5 5.5l-1-1M3 12H2m8 10h4m3-10a5 5 0 1 0-7 4.584V19h4v-2.416A5.001 5.001 0 0 0 17 12z"
				></path>
			</g>
		</svg>
	);
}
