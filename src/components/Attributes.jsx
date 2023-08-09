import styles from "./Attributes.module.css";
import { useState } from "react";
import AttributeCell from "@/components/AttributeCell";
import { baseAttributes } from "@/data/base";
import SectionHeading from "./SectionHeading";

export default function Attributes({ characterSheet }) {
	const [isLocked, setIsLocked] = useState(false);
	const [attributes, setAttributes] = useState(baseAttributes);

	const updateAttribute = (attribute, newValue, newModifier) => {
		setAttributes((prevAttributes) => ({
			...prevAttributes,
			[attribute]: { value: newValue, modifier: newModifier }
		}));
	};

	return (
		<section>
			<SectionHeading type={"scroll"} text="Atributos" />
			<ul className={styles.attrGrid}>
				{Object.entries(attributes).map(([attribute, { value, modifier }]) => (
					<AttributeCell
						key={attribute}
						attribute={attribute}
						attributeValue={value}
						attributeModifier={modifier}
						updateAttribute={updateAttribute}
						isLocked={isLocked}
					/>
				))}
			</ul>
			<button onClick={() => setIsLocked(!isLocked)}>
				{isLocked ? "Unlock" : "Lock"}
			</button>
		</section>
	);
}
