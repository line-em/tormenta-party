'use client';
import styles from "./Attributes.module.css";
import AttributeCell from "./AttributeCell";
import { useFormContext } from "react-hook-form";

export default function Attributes() {
	const baseAttributes = {
		FOR: 0,
		DES: 0,
		CON: 0,
		INT: 0,
		SAB: 0,
		CAR: 0
	};

	const { setValue, getValues } = useFormContext();

	const attributes = getValues("attributes") || baseAttributes;

	const updateAttribute = (attribute, newValue) => {
		setValue("attributes", {
			...attributes,
			[attribute]: newValue
		});
	};

	return (
		<ul className={styles.attrGrid}>
			{Object.entries(sortObjectBasedOnObject(attributes, baseAttributes)).map(([attribute, attributeValue]) => (
				<AttributeCell
					key={attribute}
					attribute={attribute}
					attributeValue={attributeValue}
					updateAttribute={updateAttribute}
				/>
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
