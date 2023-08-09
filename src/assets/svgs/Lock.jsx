export default function Lock(props) {
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
					fillRule="evenodd"
					d="M3 12a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7zm10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3z"
					clipRule="evenodd"
				></path>
				<path
					stroke="var(--black)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M8 10V7a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v3"
				></path>
			</g>
		</svg>
	);
}
