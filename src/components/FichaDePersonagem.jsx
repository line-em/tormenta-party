import styles from "./Attributes/Attributes.module.css";
import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Attributes from "@/components/Attributes/Attributes";

export default function FichaDePersonagem({ characterSheet }) {
	return (
		<section>
			<SectionHeading type={"scroll"} text="Ficha de Personagem" />
			<Attributes />
		</section>
	);
}
