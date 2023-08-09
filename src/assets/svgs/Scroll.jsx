export default function MajesticonsScrollText(props) {
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
					stroke="var(--black)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M14 8H9m2 4H9"
				></path>
				<path
					fill="var(--black)"
					d="M3 16h8c0 1.333.8 4 4 4a3 3 0 0 0 3-3V4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1v7a3 3 0 0 1-3 3H5a2 2 0 0 1-2-2v-2z"
				></path>
				<path
					stroke="var(--black)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M15 20c-3.2 0-4-2.667-4-4H3v2a2 2 0 0 0 2 2h10zm0 0a3 3 0 0 0 3-3v-7m0-6H7a2 2 0 0 0-2 2v9.5M18 4h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1m0-6v6"
				></path>
			</g>
		</svg>
	);
}
