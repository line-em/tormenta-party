import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import Lock from "@/assets/svgs/Lock";
import Unlock from "@/assets/svgs/Unlock";
import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";

export default function CharacterSheet({ characterSheet }) {
	const [isLocked, setIsLocked] = useState(true);

	return (
		<div className={styles.characterSheet}>
			<SectionHeading icon={"scroll"}>Ficha de Personagem</SectionHeading>
			<BasicInfo isLocked={isLocked} />
			<Circle css={"big"}>
				<Clips width={50} height={50} />
			</Circle>
			<Attributes isLocked={isLocked} />
			<div>
				<button>Basic Info</button>
				<button>Inventário</button>
			</div>
			<button onClick={() => setIsLocked(!isLocked)}>
				{isLocked ? (
					<Lock width={30} height={30} />
				) : (
					<Unlock width={30} height={30} />
				)}
			</button>
		</div>
	);
}
