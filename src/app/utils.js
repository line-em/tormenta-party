export function calculateModifier(attributeValue) {
	if (attributeValue < 0 || attributeValue > 30) {
		throw new Error("Attribute value must be between 0 and 30.");
	}

	const modifier = Math.floor((attributeValue - 10) / 2);
	return modifier;
}

export function isNumberKey(evt) {
	const charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
	return true;
}

export const getPercent = (curr, total) => {
	const calculateValue = Math.round((curr / total) * 100);
	if (calculateValue > 100) {
		return 100;
	}
	return calculateValue;
};

export function updateStatus(currentStatus, type, category, newValue, action) {
	const updatedStatus = { ...currentStatus };
	const typeData = updatedStatus[type];

	const updateValue = (value, change, action) => {
		return action === "increase" ? value + change : value - change;
	};

	typeData[category] = updateValue(typeData[category], newValue, action);

	return updatedStatus;
}
