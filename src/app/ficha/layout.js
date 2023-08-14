import "@/styles/sidebar-styles.css";
import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import TitleHeading from "@/components/Headings/TitleHeading";

const Layout = ({ children }) => {
	return (
		<main className="fichas">
			<aside className="main-style">
				<TitleHeading>A ameaça purista</TitleHeading>
				<SectionHeading icon={"sword"}>Aventureiros</SectionHeading>
				<CharacterList />
				{/* <SectionHeading icon={"clips"}>Recursos Adicionais</SectionHeading> */}
				<section>
					<a
						href="https://referencet20.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Referência Rápida
					</a>
					<a
						href="https://eduardomarques.pythonanywhere.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Grimório de Magias
					</a>
					<a
						href="https://helladarion-codex.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Ficha de Mostro
					</a>
				</section>
			</aside>
			<main>{children}</main>
		</main>
	);
};

export default Layout;
