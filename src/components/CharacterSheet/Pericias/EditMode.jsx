import React from "react";
import styles from "./Pericias.module.css";
import { calculateModifier } from "@/app/utils";
import ModifierButton from "@/components/ModifierButton";

const EditMode = ({
	pericias,
	periciasCols,
	treinadas,
	outros,
	toggleTreinada,
	handleOutros,
	halfLevel,
	tempData,
	total,
	handleModifierChange,
	selectedModifiers
}) => {
	return (
		<>
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
					<li className={styles.total}>
						<strong>{total[item.skill]}</strong>
					</li>

					{/* Render pericia */}
					<li className={styles.pericia}>{item.skill}</li>

					{/* Render treinada */}
					<li className={styles.treinada}>
						<input
							type="checkbox"
							id={item.skill}
							checked={treinadas[item.skill]}
							onChange={() =>
								toggleTreinada(
									item.skill,
									selectedModifiers[item.skill] || item.defaultModifier
								)
							}
						/>
					</li>

					{/* Render "LEVEL" */}
					<li className={styles.nivel}>{halfLevel}</li>

					{/* Render "Modificador" */}

					<select
						value={selectedModifiers[item.skill] || item.defaultModifier}
						onChange={(e) => handleModifierChange(e, item.skill)}
						className="small"
					>
						{Object.entries(tempData).map(([modifier, value]) => (
							<option key={modifier} value={modifier}>
								{`${calculateModifier(value)} (${modifier})`}
							</option>
						))}
					</select>

					{/* Render "Outros" */}
					<li className={styles.outros}>
						<ModifierButton
							type={"remove"}
							func={() =>
								handleOutros(
									-1,
									item.skill,
									selectedModifiers[item.skill] || item.defaultModifier
								)
							}
						/>
						<p style={{ marginInline: "var(--spacing-xs)" }}>
							{" "}
							{outros[item.skill] ?? 0}
						</p>
						<ModifierButton
							type={"add"}
							func={(e) =>
								handleOutros(
									1,
									item.skill,
									selectedModifiers[item.skill] || item.defaultModifier
								)
							}
						/>
						{/* <input
							type="number"
							id={item.skill}
							value={outros[item.skill]}
							onChange={(e) =>
								handleOutros(e, item.skill, item.defaultModifier)
							}
							style={{ width: "60px", padding: "5px", textAlign: "center" }}
						/> */}
					</li>
				</React.Fragment>
			))}
		</>
	);
};

export default EditMode;
