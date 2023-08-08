import { useState } from "react";
import { calculateModifier } from "@/app/utils";
export default function AttributeCell({
	attribute,
	attributeValue,
	attributeModifier,
	updateAttribute,
	isLocked
}) {
	const handleValueChange = (event) => {
		if (!isLocked) {
			const newValue = parseInt(event.target.value, 10);
			const newModifier = calculateModifier(newValue);
			updateAttribute(attribute, newValue, newModifier);
		}
	};
	return (
		<li>
			<span>{attribute}</span>
			<div>
				<input
					type="number"
					value={attributeValue}
					min={0}
					max={20}
					onChange={handleValueChange}
					disabled={isLocked}
				/>
				<p>{attributeModifier}</p>
			</div>
		</li>
	);
}
