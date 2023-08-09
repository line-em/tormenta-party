import Dices from "@/assets/svgs/Dices.jsx";
import MajesticonsScrollText from "@/assets/svgs/Scroll";
import RiSwordFill from "@/assets/svgs/Swords";
const SectionHeading = ({ type, text }) => {
	return (
		<header className="title">
			{(() => {
				const iconProps = { width: 55, height: 55 };
				switch (type) {
					case "dice":
						return <Dices {...iconProps} />;
					case "scroll":
						return <MajesticonsScrollText {...iconProps} />;
					default:
						return <RiSwordFill {...iconProps} />;
				}
			})()}
			<h1 className="tormenta">{text}</h1>
		</header>
	);
};

export default SectionHeading;
