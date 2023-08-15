import { pericias, periciasCols } from "@/data/pericias";
import { useEffect, useState } from "react";
import styles from "./Pericias.module.css";
import React from "react";
import Input from "@/components/Form/Input";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import { calculateModifier } from "@/app/utils";

const Pericias = ({ data }) => {
	const tempData = {
		lvl: 5,
		FOR: 10,
		CON: 8,
		DES: 8,
		INT: 12,
		SAB: 10,
		CAR: 15
	};

	const rowNumber = pericias.length;
	const halfLevel = Math.floor(tempData.lvl / 2);
	const [treinadas, setTreinadas] = useState({});
	const [outros, setOutros] = useState({});
	const [selectedModifiers, setSelectedModifiers] = useState({});

	const [total, setTotal] = useState({});
	const [editMode, setEditMode] = useState(false);

	const toggleTreinada = (skill, modifier) => {
		setTreinadas((prevTreinadas) => ({
			...prevTreinadas,
			[skill]: !prevTreinadas[skill]
		}));
		updateTotal(skill, modifier);
	};

	const handleModifierChange = (e, skill) => {
		const selectedModifier = e.target.value;
		setSelectedModifiers((prevSelectedModifiers) => ({
			...prevSelectedModifiers,
			[skill]: selectedModifier
		}));
		updateTotal(skill, selectedModifier);
	};

	const handleOutros = (change, skill, modifier) => {
		setOutros((prevOutros) => ({
			...prevOutros,
			[skill]: Number((prevOutros[skill] ?? 0) + change)
		}));
		updateTotal(skill, modifier);
	};

	const updateTotal = (skill, modifier) => {
		setTotal((prevTotal) => ({
			...prevTotal,
			[skill]:
				Number(halfLevel) +
				(treinadas[skill] ? 2 : 0) +
				Number(calculateModifier(tempData[modifier])) +
				(Number(outros[skill]) || 0)
		}));
	};

	useEffect(() => {
		pericias.forEach((item) => {
			updateTotal(
				item.skill,
				selectedModifiers[item.skill] || item.defaultModifier
			);
		});
	}, [total]);

	return (
		<>
			<button
				onClick={() => setEditMode(!editMode)}
				className="fit center secondary"
			>
				Switch to {editMode ? "View" : "Edit"} Mode
			</button>
			<ul className={`no-shadow no-padding ${styles.list}`}>
				{editMode ? (
					<EditMode
						pericias={pericias}
						periciasCols={periciasCols}
						treinadas={treinadas}
						outros={outros}
						toggleTreinada={toggleTreinada}
						handleOutros={handleOutros}
						halfLevel={halfLevel}
						tempData={tempData}
						total={total}
						selectedModifiers={selectedModifiers}
						handleModifierChange={handleModifierChange}
					/>
				) : (
					<ViewMode pericias={pericias} total={total} />
				)}
			</ul>
		</>
	);
};

export default Pericias;

{
	/* 		{Array.from({ length: rowNumber }).map((_, i) => (
				<li className={styles.total} key={i}>
					{halfLevel + (treinada ? 2 : 0) + calculateModifier(tempData.FOR)}
				</li>
			))}

			{pericias.map((item) => (
				<li className={styles.pericia} key={crypto.randomUUID()}>
					{item.skill}
				</li>
			))}

			{pericias.map((item) => (
				<li className={styles.treinada} key={crypto.randomUUID()}>
					<input
						type="checkbox"
						id={item.skill}
						checked={treinada}
						onClick={() => setTreinada(!treinada)}
					/>
				</li>
			))}

			{Array.from({ length: rowNumber }).map((_, i) => (
				<>
					<li className={styles.modificador} key={crypto.randomUUID()}>
						x
					</li>

					<li className={styles.total}>
						{halfLevel + (treinada ? 2 : 0) + tempData[pericias[i].skill]}
					</li>

					<li className={styles.pericia}>{pericias[i].skill}</li>

					<li className={styles.treinada}>
						<input
							type="checkbox"
							checked={treinada}
							onClick={() => setTreinada(!treinada)}
						/>
					</li>
				</>
			))}
		</ul> */
}
