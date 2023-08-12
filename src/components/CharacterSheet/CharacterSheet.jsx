import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import Lock from "@/assets/svgs/Lock";
import Unlock from "@/assets/svgs/Unlock";

export default function CharacterSheet({ characterSheet }) {
	const [isLocked, setIsLocked] = useState(true);

	return (
		<div className={styles.characterSheet}>
			<SectionHeading icon={"scroll"}>
				Ficha de Personagem
				<button onClick={() => setIsLocked(!isLocked)}>
					{isLocked ? (
						<Lock width={30} height={30} />
					) : (
						<Unlock width={30} height={30} />
					)}
				</button>
			</SectionHeading>
			<BasicInfo isLocked={isLocked} />
			<Attributes isLocked={isLocked} />
		</div>
	);
}
