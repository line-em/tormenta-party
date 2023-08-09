export default function Money(props) {
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
					d="M21 8c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 9.92 7 9.02 7 8c0-1.657 3.134-3 7-3s7 1.343 7 3z"
				></path>
				<path
					stroke="var(--black)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M21 8c0-1.657-3.134-3-7-3S7 6.343 7 8m14 0v4c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 13.92 7 13.02 7 12V8m14 0c0 1.02-1.186 1.92-3 2.462c-1.134.34-2.513.538-4 .538s-2.866-.199-4-.538C8.187 9.92 7 9.02 7 8"
				></path>
				<path
					stroke="var(--black)"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M3 12v4c0 1.02 1.187 1.92 3 2.462c1.134.34 2.513.538 4 .538s2.866-.199 4-.538c1.813-.542 3-1.442 3-2.462v-1M3 12c0-1.197 1.635-2.23 4-2.711M3 12c0 1.02 1.187 1.92 3 2.462c1.134.34 2.513.538 4 .538c.695 0 1.366-.043 2-.124"
				></path>
			</g>
		</svg>
	);
}
