"use client";

import Attributes from "@/components/Attributes";
import DiceRolls from "@/components/DiceRolls";
import SectionHeading from "@/components/SectionHeading";

export default function Home() {
	return (
		<main>
			<header>
				<h1 className="tormenta title">Aventura Sem Nome</h1>
			</header>
			<DiceRolls />
			<Attributes />
			<Attributes />
			<Attributes />
			<Attributes />
			<Attributes />
			<Attributes />
			<Attributes />
			<section>
				<SectionHeading type={"swords"} text="Aventureiros" />
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
			</section>
		</main>
	);
}
