import "@/styles/sidebar-styles.css";
import CharacterList from "@/components/CharacterList";
import Accordion from "@/components/Accordion";
import Referencias from "@/components/Referencias";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import DefaultUser from "@/assets/svgs/DefaultUser";
import MajesticonsScrollText from "@/assets/svgs/Scroll";

const Layout = ({ children }) => {
	return (
		<main className="fichas">
			<nav className="main-style">
				<Accordion
					header={
						<button className="smaller-padding secondary">
							<span className="icon-overlay">
								<DefaultUser width={25} height={25} />
							</span>{" "}
						</button>
					}
					content={<CharacterList menu />}
					absolute
				/>

				<Accordion
					header={
						<button className="smaller-padding secondary">
							<MajesticonsScrollText width={25} height={25} />
						</button>
					}
					content={<Referencias />}
					absolute
				/>
			</nav>
			<CharacterSheet>{children}</CharacterSheet>
		</main>
	);
};

export default Layout;

// 		<SectionHeading
// icon={"sword"}
// 	small
// >
// 	Recursos
// </SectionHeading>
// <Referencias />
