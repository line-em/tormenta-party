import Armor from "@/assets/svgs/Armor";
// import Clips from "@/assets/svgs/Clips";
import DefaultUser from "@/assets/svgs/DefaultUser";
import Dices from "@/assets/svgs/Dices.jsx";
import Items from "@/assets/svgs/Items";
import Money from "@/assets/svgs/Money";
import MajesticonsScrollText from "@/assets/svgs/Scroll";
import Spells from "@/assets/svgs/Spells";
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
					case "items":
						return <Items {...iconProps} />;
					case "dinheiro":
						return <Money {...iconProps} />;
					case "sword":
						return <RiSwordFill {...iconProps} />;
					case "spells":
						return <Spells {...iconProps} />;
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
