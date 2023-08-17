"use client";
import { useState } from "react";
import { DiceRoller } from "@dice-roller/rpg-dice-roller";
import styles from "./DiceRolls.module.css";
import SectionHeading from "../Headings/SectionHeading";

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
		<section className="row wrap">
			<button onClick={() => rollDice("1d4")} className="secondary fit">
				1d4
			</button>
			<button onClick={() => rollDice("1d6")} className="secondary fit">
				1d6
			</button>
			<button onClick={() => rollDice("1d8")} className="secondary fit">
				1d8
			</button>
			<button onClick={() => rollDice("1d12")} className="secondary fit">
				1d12
			</button>
			<button onClick={() => rollDice("1d20")} className="secondary fit">
				1d20
			</button>
			<h2 className={`${styles.dice}`}>{dice}</h2>
			{/* <p>{results}</p> */}
			<input
				type="text"
				placeholder="2D6"
				onChange={(e) => setCurrValue(e.target.value)}
			/>
			<button onClick={() => rollDice(currValue)}>Click</button>
		</section>
	);
}
