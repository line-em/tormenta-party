import styles from "./Attributes.module.css";
import AttributeCell from "./AttributeCell";
import { baseAttributes } from "@/data/base";
import { useState } from "react";
import Health from "../CharacterSheet/Geral/Health";

export default function Attributes({ characterSheet, isLocked }) {
	const [attributes, setAttributes] = useState(baseAttributes);

	const updateAttribute = (attribute, newValue, newModifier) => {
		setAttributes((prevAttributes) => ({
			...prevAttributes,
			[attribute]: { value: newValue, modifier: newModifier }
		}));
	};

	return (
		<div className={styles.attrGrid}>
			<ul>
				{Object.entries(attributes).map(([attribute, { value, modifier }]) => (
					<AttributeCell
						key={attribute}
						attribute={attribute}
						isLocked={isLocked}
						attributeValue={value}
						attributeModifier={modifier}
						updateAttribute={updateAttribute}
					/>
				))}
			</ul>
			<Health isLocked={isLocked} />
		</div>
	);
}
