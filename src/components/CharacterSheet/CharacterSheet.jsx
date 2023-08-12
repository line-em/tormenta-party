import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import Lock from "@/assets/svgs/Lock";

export default function CharacterSheet({ characterSheet }) {
	const [isLocked, setIsLocked] = useState(true);

	return (
		<div className={styles.characterSheet}>
			<SectionHeading type={"scroll"} text="Ficha de Personagem" />
			<BasicInfo isLocked={isLocked} />
			<Attributes isLocked={isLocked} />
			<button onClick={() => setIsLocked(!isLocked)}>
				{isLocked ? "Unlock " : "Lock "} <Lock width={20} height={20} />
			</button>
		</div>
	);
}
