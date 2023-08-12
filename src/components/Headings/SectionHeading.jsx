import Clips from "@/assets/svgs/Clips";
import DefaultUser from "@/assets/svgs/DefaultUser";
import Dices from "@/assets/svgs/Dices.jsx";
import MajesticonsScrollText from "@/assets/svgs/Scroll";
import RiSwordFill from "@/assets/svgs/Swords";
const SectionHeading = ({ icon = "none", row = true, children }) => {
	return (
		<header className={`section-style ${row && "row"}`}>
			{(() => {
				const iconProps = { width: 55, height: 55 };
				switch (icon) {
					case "dice":
						return <Dices {...iconProps} />;
					case "scroll":
						return <MajesticonsScrollText {...iconProps} />;
					case "clips":
						return <Clips {...iconProps} />;
					case "sword":
						return <RiSwordFill {...iconProps} />;
					case "user":
						return <DefaultUser {...iconProps} />;
					case "none":
						return;
				}
			})()}
			<h1 className="tormenta">{children}</h1>
		</header>
	);
};

export default SectionHeading;
