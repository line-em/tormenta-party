"use client";

import AttributeCell from "@/components/AttributeCell";
import Attributes from "@/components/Attributes";
import DiceRolls from "@/components/DiceRolls";

export default function Home() {
	return (
		<main>
			<header>
				<h1 className="tormenta title">Aventura Sem Nome</h1>
			</header>
			<DiceRolls />
			<section>
				<Attributes />
			</section>
			<section>
				<h1 className="tormenta">Aventureiros</h1>
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
			</section>
		</main>
	);
}
