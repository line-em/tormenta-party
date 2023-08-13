import styles from "./CharacterSheet.module.css";
import "@/styles/floating-input.css";
import { useState } from "react";
import Pericias from "./Pericias/Pericias";
import Sidebar from "./Sidebar";
import Geral from "./Geral/Geral";
import Footer from "./Footer";

export default function CharacterSheet({ data }) {
	const [isLocked, setIsLocked] = useState(true);
	const [currentTab, setCurrentTab] = useState("geral");

	const getContent = () => {
		switch (currentTab) {
			case "geral":
				return <Geral isLocked={isLocked} data={data} />;
			case "pericias":
				return <Pericias />;
			default:
				return "Conteúdo não disponível";
		}
	};

	return (
		<div className={styles.characterSheet}>
			<Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<article className="no-shadow">
				{getContent()}
				<Footer isLocked={isLocked} setIsLocked={setIsLocked} />
			</article>
		</div>
	);
}
