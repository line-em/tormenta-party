import Circle from "./Circle";
import Link from "next/link";
import ImageCircle from "./ImageCircle";

const CircleAndTextButton = ({
	func = () => {},
	icon,
	children,
	hasImage,
	asLink = false,
	href = "#"
}) => {
	// FIXME: Use proper images
	if (asLink) {
		return (
			<Link href={href} className="link-button headless">
				<Circle hasImage>
					{hasImage ? (
						<ImageCircle type={children} width={200} height={200} />
					) : (
						icon
					)}
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
