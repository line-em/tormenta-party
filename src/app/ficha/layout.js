import "@/styles/sidebar-styles.css";
import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import DiceRolls from "@/components/DiceRolls/DiceRolls";
import Accordion from "@/components/Accordion";
import Referencias from "@/components/Referencias";

const Layout = ({ children }) => {
	return (
		<main className="fichas">
			<nav className="main-style">
				<Accordion
					header={<SectionHeading small>Aventureiros</SectionHeading>}
					content={<CharacterList />}
					absolute
				/>
				<Accordion
					header={<SectionHeading small>Dados</SectionHeading>}
					content={<DiceRolls />}
					absolute
				/>
				<Accordion
					header={<SectionHeading small>Recursos</SectionHeading>}
					content={<Referencias />}
					absolute
				/>
			</nav>
			{children}
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
