import styles from "./Attributes.module.css";
import AttributeCell from "./AttributeCell";
import { baseAttributes } from "@/data/base";
import { useState } from "react";
import Health from "../CharacterSheet/Health";

export default function Attributes({ characterSheet, isLocked }) {
	const [attributes, setAttributes] = useState(baseAttributes);

	const updateAttribute = (attribute, newValue, newModifier) => {
		setAttributes((prevAttributes) => ({
			...prevAttributes,
			[attribute]: { value: newValue, modifier: newModifier }
		}));
	};

	return (
		<ul className={styles.attrGrid}>
			{Object.entries(attributes).map(([attribute, { value, modifier }]) => (
				<AttributeCell
					key={attribute}
					attribute={attribute}
					attributeValue={value}
					attributeModifier={modifier}
					updateAttribute={updateAttribute}
				/>
			))}
			<Health isLocked={isLocked} />
		</ul>
	);
}
