import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./Geral/BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import LockButton from "../LockButton/LockButton";
import Pericias from "./Pericias";
import Sidebar from "./Sidebar";

export default function CharacterSheet({ character }) {
	const [isLocked, setIsLocked] = useState(true);
	const [currentTab, setCurrentTab] = useState("main");

	return (
		<div className={styles.characterSheet}>
			<Sidebar currentTab={currentTab} />
			<article className="no-shadow">
				<BasicInfo isLocked={isLocked} name={character.name} />
				<Attributes isLocked={isLocked} />
				{/* <Pericias /> */}
				<footer>
					<LockButton isLocked={isLocked} setIsLocked={setIsLocked} />
					<button>Save</button>
				</footer>
			</article>
		</div>
	);
}
