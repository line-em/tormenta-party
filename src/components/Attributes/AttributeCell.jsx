import { isNumberKey } from "@/app/utils";

export default function AttributeCell({ attribute, attributeValue, updateAttribute }) {
	const handleValueChange = (e) => {
		// check if isNumberKey is true. If not, set to 0.
		// check value. if > 10, set to 10. if < -10, set to -10.
		if (!e.target.value) {
			e.target.value = 0;
		}
		let newValue = parseInt(e.target.value, 10);
		// if (newValue > 10) {
		// 	newValue = 10;
		// } else if (newValue < -10) {
		// 	newValue = -10;
		// }
		// if (!isNumberKey(e)) {
		// 	newValue = 0;
		// }
		updateAttribute(attribute, newValue);
	};

	return (
		<li>
			<span>{attribute}</span>
			<div>
				<input
					// type="number"
					value={attributeValue}
					min={-10}
					max={10}
					className="big"
					onChange={handleValueChange}
					// pattern="[0-9]{2}"
					maxLength="4"
					onKeyDown={(e) => isNumberKey(e)}
				/>
				{/* <p>{attributeValue}</p> */}
			</div>
		</li>
	);
}
