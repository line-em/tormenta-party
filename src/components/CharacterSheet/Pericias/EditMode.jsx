import React from "react";
import styles from "./Pericias.module.css";
import { calculateModifier } from "@/app/utils";
import ModifierButton from "@/components/ModifierButton";
import SelectInput from "@/components/Form/SelectInput";
import { useFormContext } from "react-hook-form";
import Input from "@/components/Form/Input";

const EditMode = ({
	pericias,
	periciasCols,
	attributes,
	treinadas,
	outros,
	toggleTreinada,
	handleOutros,
	levelBonus,
	tempData,
	total,
	handleModifierChange,
	selectedModifiers,
	db
}) => {
	// const { getValues } = useFormContext();
	// const attributes = getValues("attributes") || {};

	return (
		<>
			{periciasCols.map((item, index) => {
				return (
					<li role="columnheader" key={crypto.randomUUID()}>
						{item}
					</li>
				);
			})}

			{Object.keys(pericias).map((item, i) => (
				<React.Fragment key={item + i}>
					<li className={styles.pericia}>{item}</li>
					<li className={styles.nivel}>{levelBonus}</li>
					<Input
						type="checkbox"
						rowCss={styles.treinada}
						id={`pericias.${item}.treinada`}
						checked={db && db[item]?.treinada}
					/>
					<SelectInput
						id={`pericias.${item}.attr`}
						options={Object.keys(attributes)}
						inputCss={"small"}
						rowCss={styles.modificador}
						value={db ? db[item]?.attr : [pericias[item]]}
						label={pericias[item]}
					/>
					<Input
						type="number"
						id={`pericias.${item}.outros`}
						rowCss={styles.outros}
						inputCss={"small"}
						value={db ? db[item]?.outros : 0}
					/>
				</React.Fragment>
			))}
			{/* {pericias.map((item, i) => (
				<React.Fragment key={item.skill}>
			
					<li className={styles.total}>
						<strong>{total[item.skill]}</strong>
					</li>

				
					<li className={styles.pericia}>{item.skill}</li>

					
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

					<li className={styles.nivel}>{halfLevel}</li>

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
					</li>
				</React.Fragment>
			))} */}
		</>
	);
};

export default EditMode;
