import styles from "./Attributes.module.css";
import AttributeCell from "./AttributeCell";
import { useFormContext } from "react-hook-form";

export default function Attributes({ data, isLocked }) {
	const baseAttributes = {
		FOR: { value: 10, modifier: 0 },
		DES: { value: 10, modifier: 0 },
		CON: { value: 10, modifier: 0 },
		INT: { value: 10, modifier: 0 },
		SAB: { value: 10, modifier: 0 },
		CAR: { value: 10, modifier: 0 }
	};
	const { setValue, getValues } = useFormContext();

	let sortedDatabaseResult = data?.attributes
		? sortObjectBasedOnObject(data.attributes, baseAttributes)
		: null;

	const attributes = getValues("attributes") || sortedDatabaseResult || baseAttributes;

	const updateAttribute = (attribute, newValue, newModifier) => {
		setValue("attributes", {
			...attributes,
			[attribute]: { value: newValue, modifier: newModifier }
		});
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
		</div>
	);
}

function sortObjectBasedOnObject(obj, baseObj) {
	const sortedObj = {};
	Object.keys(baseObj).forEach((key) => {
		sortedObj[key] = obj[key];
	});
	return sortedObj;
}
