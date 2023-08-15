import "@/styles/sidebar-styles.css";
import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import TitleHeading from "@/components/Headings/TitleHeading";
import Referencias from "@/components/Referencias";

const Layout = ({ children }) => {
	return (
		<main className="fichas">
			<aside className="main-style">
				<SectionHeading icon={"sword"} small>
					Aventureiros
				</SectionHeading>
				<CharacterList />
				<Referencias />
			</aside>
			{children}
		</main>
	);
};

export default Layout;
