import { useState } from "react";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";
import styles from "./DiceRolls.module.css";

export default function DiceRolls() {
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
		<section>
			<h1 className="tormenta">Rolagem de Dados</h1>

			<h2 className={`tormenta ${styles.dice}`}>{dice}</h2>
			<p>{results}</p>
			<input
				type="text"
				placeholder="2D6"
				onChange={(e) => setCurrValue(e.target.value)}
			/>
			<button onClick={() => rollDice(currValue)}>Click</button>
			<button onClick={() => rollDice("1d20")}>1d20</button>
		</section>
	);
}
