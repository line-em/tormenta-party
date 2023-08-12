import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";
import LockButton from "../LockButton/LockButton";

export default function CharacterSheet({ characterSheet }) {
	const [isLocked, setIsLocked] = useState(true);

	return (
		<div className={styles.characterSheet}>
			<SectionHeading icon={"scroll"} row={false}>
				Ficha de Personagem
			</SectionHeading>
			<BasicInfo isLocked={isLocked} />
			<Circle css={"big"}>
				<Clips width={50} height={50} />
			</Circle>
			<Attributes isLocked={isLocked} />
			<div>
				<button>Basic Info</button>
				<button>Inventário</button>
			</div>
			<LockButton isLocked={isLocked} />
		</div>
	);
}
