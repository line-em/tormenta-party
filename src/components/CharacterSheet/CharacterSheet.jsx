import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";
import LockButton from "../LockButton/LockButton";

export default function CharacterSheet({ character }) {
	const [isLocked, setIsLocked] = useState(true);
	const [currentTab, setCurrentTab] = useState("main");

	return (
		<div className={styles.characterSheet}>
			<SectionHeading
				icon={"scroll"}
				// row={false}
			>
				Ficha de Personagem
			</SectionHeading>
			<BasicInfo isLocked={isLocked} />
			<Attributes isLocked={isLocked} />
			<aside>
				<Circle width={"100%"} height={"auto"} max-width={"10vw"}>
					<Clips width={50} height={50} />
				</Circle>
			</aside>
			<nav>
				<button disabled={currentTab === "main"}>{character.name}</button>
				<button>Combate</button>
				<button>Inventário</button>
				<button>Magias</button>
				<button>Notas</button>
			</nav>
			<LockButton isLocked={isLocked} setIsLocked={setIsLocked} />
		</div>
	);
}
