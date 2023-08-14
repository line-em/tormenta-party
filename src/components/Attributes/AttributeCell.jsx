import { useState } from "react";
import { calculateModifier, isNumberKey } from "@/app/utils";

export default function AttributeCell({
	attribute,
	attributeValue,
	attributeModifier,
	updateAttribute,
	isLocked
}) {
	const handleValueChange = (e) => {
		if (!isLocked) {
			if (!e.target.value) {
				e.target.value = 0;
			}
			const newValue = parseInt(e.target.value, 10);
			const newModifier = calculateModifier(newValue);
			updateAttribute(attribute, newValue, newModifier);
		}
	};

	return (
		<li>
			<span>{attribute}</span>
			<div>
				<input
					type="text"
					value={attributeValue}
					min={0}
					max={25}
					className="big"
					onChange={handleValueChange}
					disabled={isLocked}
					onKeyDown={(e) => isNumberKey(e)}
				/>
				<p>{attributeModifier}</p>
			</div>
		</li>
	);
}
