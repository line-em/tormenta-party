'use client';
import styles from "./Attributes.module.css";
import { useFormContext } from "react-hook-form";

export function Attributes() {
	const { setValue, getValues } = useFormContext();

	let attributes = getValues("attributes") || baseAttributes;

	const updateAttribute = (e, attribute) => {
		if (!e.target.value) {
			e.target.value = 0;
		}
		let newValue = parseInt(e.target.value, 10);
		setValue("attributes", {
			...attributes,
			[attribute]: newValue
		});
	};

	return (
		<ul className={styles.attrGrid}>
			{Object.entries(sortObjectBasedOnObject(attributes, baseAttributes)).map(([attribute, attributeValue]) => (
				<li key={attribute}>
					<span>{attribute}</span>
					<div>
						<input
							value={attributeValue}
							min={-10}
							max={20}
							className="big"
							onChange={(e) => updateAttribute(e, attribute)}
							maxLength="4"
						/>
					</div>
				</li>
			))}
		</ul>
	);
}

function sortObjectBasedOnObject(obj, baseObj) {
	const sortedObj = {};
	Object.keys(baseObj).forEach((key) => {
		sortedObj[key] = obj[key];
	});
	return sortedObj;
}

export const baseAttributes = {
		FOR: 0,
		DES: 0,
		CON: 0,
		INT: 0,
		SAB: 0,
		CAR: 0
};
