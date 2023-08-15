"use client";

import styles from "./CharacterSheet.module.css";
import "@/styles/floating-input.css";
import "@/styles/checkbox.css";
import { useState, useEffect } from "react";
import Pericias from "./Pericias/Pericias";
import Sidebar from "./Sidebar";
import Geral from "./Geral/Geral";
import Form from "../Form/Form";

export default function CharacterSheet({ character }) {
	const [isLocked, setIsLocked] = useState(false);
	const [currentTab, setCurrentTab] = useState("geral");
	const getContent = () => {
		switch (currentTab) {
			case "geral":
				return <Geral isLocked={isLocked} data={character} />;
			case "pericias":
				return <Pericias />;
			default:
				return "Conteúdo não disponível";
		}
	};

	return (
		<div className={styles.characterSheet}>
			<Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />
			<Form isLocked={isLocked} setIsLocked={setIsLocked}>
				{getContent()}
			</Form>
		</div>
	);
}
