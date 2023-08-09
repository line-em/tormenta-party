import styles from "./Attributes.module.css";
import { useState } from "react";
import AttributeCell from "./AttributeCell";
import { baseAttributes } from "@/data/base";
import Lock from "@/assets/svgs/Lock";

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
				<button onClick={() => setIsLocked(!isLocked)}>
					{isLocked ? "Unlock " : "Lock "} <Lock width={20} height={20} />
				</button>
			</ul>
		</section>
	);
}
