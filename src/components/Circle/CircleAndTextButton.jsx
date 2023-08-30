import Circle from "./Circle";
import Link from "next/link";
import ImageCircle from "./ImageCircle";

const CircleAndTextButton = ({
	func = () => {},
	icon,
	children,
	hasImage,
	asLink = false,
	href = "#",
	...props
}) => {
	// FIXME: Use proper images
	if (asLink) {
		return (
			<Link href={href} className="link-button headless" {...props}>
				<Circle hasImage>
					{hasImage ? <ImageCircle type={children} /> : icon}
				</Circle>
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
