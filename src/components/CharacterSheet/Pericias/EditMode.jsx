import React from "react";
import styles from "./Pericias.module.css";
import SelectInput from "@/components/Form/SelectInput";
import Input from "@/components/Form/Input";

const EditMode = ({ pericias, periciasCols, attributes, levelBonus, db }) => {
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
						value={db && db[item]?.attr ? db[item]?.attr : [pericias[item]]}
						label={pericias[item]}
					/>
					<Input
						type="number"
						id={`pericias.${item}.outros`}
						rowCss={styles.outros}
						inputCss={"small"}
						value={db && db[item]?.outros ? db[item]?.outros : 0}
					/>
				</React.Fragment>
			))}
		</>
	);
};

export default EditMode;
