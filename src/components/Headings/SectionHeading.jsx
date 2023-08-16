import Armor from "@/assets/svgs/Armor";
// import Clips from "@/assets/svgs/Clips";
import DefaultUser from "@/assets/svgs/DefaultUser";
import Dices from "@/assets/svgs/Dices.jsx";
import MajesticonsScrollText from "@/assets/svgs/Scroll";
import RiSwordFill from "@/assets/svgs/Swords";
const SectionHeading = ({ icon = "none", small = false, children }) => {
	return (
		<header className={`section-style row`}>
			{(() => {
				const iconProps = small
					? { width: 30, height: 30 }
					: { width: 50, height: 50 };
				switch (icon) {
					case "dice":
						return <Dices {...iconProps} />;
					case "scroll":
						return <MajesticonsScrollText {...iconProps} />;
					// case "clips":
					// 	return <Clips {...iconProps} />;
					case "sword":
						return <RiSwordFill {...iconProps} />;
					case "armor":
						return <Armor {...iconProps} />;
					case "user":
						return <DefaultUser {...iconProps} />;
					case "none":
						return;
				}
			})()}
			{small ? (
				<h2 className="tormenta">{children}</h2>
			) : (
				<h1 className="tormenta">{children}</h1>
			)}
		</header>
	);
};

export default SectionHeading;
