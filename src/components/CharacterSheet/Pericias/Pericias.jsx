import { pericias, periciasCols } from "@/data/pericias";
import styles from "./Pericias.module.css";
import { useState } from "react";
import React from "react";
import { calculateModifier } from "@/app/utils";
import Input from "@/components/Form/Input";

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

	const [total, setTotal] = useState({}); // Total state for each skill

	const toggleTreinada = (skill) => {
		setTreinadas((prevTreinadas) => ({
			...prevTreinadas,
			[skill]: !prevTreinadas[skill]
		}));
		updateTotal(skill);
	};

	const handleOutros = (e, skill) => {
		setOutros((prevOutros) => ({
			...prevOutros,
			[skill]: Number(e.target.value)
		}));
		updateTotal(skill);
	};

	const updateTotal = (skill) => {
		setTotal((prevTotal) => ({
			...prevTotal,
			[skill]:
				halfLevel +
				(treinadas[skill] ? 2 : 0) +
				calculateModifier(tempData["FOR"]) +
				(outros[skill] || 0)
		}));
	};

	return (
		<ul className={`no-shadow no-padding ${styles.list}`}>
			{periciasCols.map((item, index) => {
				return (
					<li role="columnheader" key={crypto.randomUUID()}>
						{item}
					</li>
				);
			})}

			{pericias.map((item, i) => (
				<React.Fragment key={item.skill}>
					{/* Render "Total" */}
					<li className={styles.total}>{total[item.skill]}</li>

					{/* Render pericia */}
					<li className={styles.pericia}>{item.skill}</li>

					{/* Render "LEVEL" */}
					<li className={styles.nivel}>{halfLevel}</li>

					{/* Render "Modificador" */}
					<li className={styles.modificador}>
						{calculateModifier(tempData.CAR)}
					</li>

					{/* Render treinada */}
					<li className={styles.treinada}>
						<input
							type="checkbox"
							id={item.skill}
							checked={treinadas[item.skill]}
							onChange={() => toggleTreinada(item.skill)}
						/>
					</li>

					{/* Render "Outros" */}
					<li className={styles.outros}>
						<input
							type="number"
							id={item.skill}
							value={outros[item.skill]}
							onChange={(e) => handleOutros(e, item.skill)}
							style={{ width: "60px", padding: "5px", textAlign: "center" }}
						/>
					</li>
				</React.Fragment>
			))}
		</ul>
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
