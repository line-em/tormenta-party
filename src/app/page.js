"use client";

import DiceRolls from "@/components/DiceRolls/DiceRolls.jsx";
import FichaDePersonagem from "@/components/FichaDePersonagem";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
	return (
		<main>
			<header>
				<h1 className="tormenta title">Aventura Sem Nome</h1>
			</header>
			<DiceRolls />
			<FichaDePersonagem />
			<section>
				<SectionHeading type={"swords"} text="Aventureiros" />
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
			</section>
		</main>
	);
}
