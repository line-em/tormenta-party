"use client";

import DiceRolls from "@/components/DiceRolls";

export default function Home() {
	return (
		<main>
			<ThemeToggle />
			<header>
				<h1 className="tormenta title">Aventura Sem Nome</h1>
			</header>
			<DiceRolls />
			<section>
				<h1 className="tormenta">Aventureiros</h1>
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
				<h2 className="add-circle">+</h2>
			</section>
		</main>
	);
}
