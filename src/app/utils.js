export function calculateModifier(attributeValue) {
	if (attributeValue < 0 || attributeValue > 30) {
		throw new Error("Attribute value must be between 0 and 30.");
	}

	const modifier = Math.floor((attributeValue - 10) / 2);
	return modifier;
}

export function isNumberKey(evt) {
	var charCode = evt.which ? evt.which : evt.keyCode;
	if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
	return true;
}

export const getPercent = (curr, total) => {
	const calculateValue = (curr / total) * 100;
	if (calculateValue > 100) {
		return 100;
	}
	return calculateValue;
};
