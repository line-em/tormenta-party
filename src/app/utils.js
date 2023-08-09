export function calculateModifier(attributeValue) {
	if (attributeValue < 0 || attributeValue > 30) {
		throw new Error("Attribute value must be between 0 and 30.");
	}

	const modifier = Math.floor((attributeValue - 10) / 2);
	return modifier;
}
