import Circle from "./Circle";
import Link from "next/link";

const CircleAndTextButton = ({
	func = () => {},
	icon,
	children,
	asLink = false,
	href = "#"
}) => {
	if (asLink) {
		return (
			<Link href={href} className="link-button headless">
				<Circle>{icon}</Circle>
				<h3>{children}</h3>
			</Link>
		);
	}

	return (
		<button className="headless" onClick={func}>
			<Circle>{icon}</Circle>
			<h3>{children}</h3>
		</button>
	);
};

export default CircleAndTextButton;
