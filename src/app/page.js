"use client";
import { useState } from "react";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
	const [dice, setDice] = useState("");
	const [results, setResults] = useState("");
	const [currValue, setCurrValue] = useState("");

	const rollDice = (input) => {
		const roller = new DiceRoller();
		const currRoll = roller.roll(input);
		setResults(currRoll.output);
		setDice(currRoll.total);
	};

	return (
		<main>
			<header>
				<ThemeToggle />
				<h1 className="tormenta title">Aventura Sem Nome</h1>
			</header>
			<section>
				<button onClick={toggleTheme}>Trocar</button>
				<h1 className="tormenta">Rolagem de Dados</h1>
				<h2 className="dice tormenta">{dice}</h2>
				<p>{results}</p>
				<input
					type="text"
					placeholder="2D6"
					onChange={(e) => setCurrValue(e.target.value)}
				/>
				<button onClick={() => rollDice(currValue)}>Click</button>
				<button onClick={() => rollDice("1d20")}>1d20</button>
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
