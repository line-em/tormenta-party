export default function Health(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				stroke="var(--black)"
				fill="var(--black)"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4z"
			></path>
		</svg>
	);
}
