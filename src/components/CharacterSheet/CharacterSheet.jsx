"use client";

import styles from "./CharacterSheet.module.css";
import "@/styles/floating-input.css";
import "@/styles/checkbox.css";
import { useState, useEffect } from "react";
import Pericias from "./Pericias/Pericias";
import Sidebar from "./Sidebar";
import Geral from "./Geral/Geral";
import Form from "../Form/Form";
import Notas from "./Notas/Notas";
import Attacks from "./Ataques/Ataques";
import Itens from "./Itens/Itens";

export default function CharacterSheet({ character }) {
	const [currentTab, setCurrentTab] = useState("geral");
	const getContent = () => {
		switch (currentTab) {
			case "geral":
				return <Geral data={character} />;
			case "pericias":
				return <Pericias />;
			case "attacks":
				return <Attacks />;
			case "itens":
				return <Itens />;
			case "notas":
				return <Notas />;
			default:
				return <section>"Conteúdo não disponível</section>;
		}
	};

	return (
		<div className={styles.characterSheet}>
			<Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<Form>{getContent()}</Form>
		</div>
	);
}
