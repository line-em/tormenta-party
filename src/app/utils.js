export function calculateModifier(attributeValue) {
	if (attributeValue < 0 || attributeValue > 20) {
		throw new Error("Attribute value must be between 0 and 20.");
	}

	const modifier = Math.floor((attributeValue - 10) / 2);
	return modifier;
}
