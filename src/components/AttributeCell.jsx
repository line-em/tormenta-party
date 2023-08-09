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
			if (!event.target.value) {
				event.target.value = 0;
			}
			const newValue = parseInt(event.target.value, 10);
			const newModifier = calculateModifier(newValue);
			updateAttribute(attribute, newValue, newModifier);
		}
	};

	function isNumberKey(evt) {
		var charCode = evt.which ? evt.which : evt.keyCode;
		if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
		return true;
	}

	return (
		<li>
			<span>{attribute}</span>
			<div>
				<input
					type="text"
					value={attributeValue}
					min={0}
					max={25}
					onChange={handleValueChange}
					disabled={isLocked}
					onKeyDown={(e) => isNumberKey(e)}
				/>
				<p>{attributeModifier}</p>
			</div>
		</li>
	);
}
