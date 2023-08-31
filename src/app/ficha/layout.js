import "@/styles/sidebar-styles.css";
import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import DiceRolls from "@/components/DiceRolls/DiceRolls";
import Accordion from "@/components/Accordion";
import Referencias from "@/components/Referencias";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";

const Layout = ({ children }) => {
	return (
		<main className="fichas">
			<nav className="main-style">
				<Accordion
					header={
						// <SectionHeading small menu>Aventureiros</SectionHeading>
						<button className="smaller-padding secondary">
							Aventureiros
						</button>
					}
					content={<CharacterList menu />}
					absolute
				/>
				{/* <Accordion
					header={<SectionHeading small>Dados</SectionHeading>}
					content={<DiceRolls />}
					absolute
				/> */}
				<Accordion
					header={
						// <SectionHeading small>Recursos</SectionHeading>
						<button className="smaller-padding secondary">Recursos</button>
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
