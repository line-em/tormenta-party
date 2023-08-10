import styles from "./Attributes/Attributes.module.css";
import { useState } from "react";
import SectionHeading from "./Headings/SectionHeading";
import Attributes from "@/components/Attributes/Attributes";

export default function CharacterSheet({ characterSheet }) {
	return (
		<>
			<SectionHeading type={"scroll"} text="Ficha de Personagem" />
			<Attributes />
		</>
	);
}
