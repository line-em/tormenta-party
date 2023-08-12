import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";

export default function CharacterSheet({ characterSheet }) {
	return (
		<div className={styles.characterSheet}>
			<SectionHeading type={"scroll"} text="Ficha de Personagem" />
			<BasicInfo />
			<Attributes />
		</div>
	);
}
