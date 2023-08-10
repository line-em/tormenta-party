export default function DefaultUser(props) {
	return (
		<svg
			width="1em"
			height="1em"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g
				fill="none"
				stroke="var(--black)"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
			>
				<circle cx="12" cy="8" r="5" fill="var(--black)"></circle>
				<path d="M20 21a8 8 0 1 0-16 0"></path>
				<path
					fill="var(--black)"
					d="M12 13a8 8 0 0 0-8 8h16a8 8 0 0 0-8-8z"
				></path>
			</g>
		</svg>
	);
}
