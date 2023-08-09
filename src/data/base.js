const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export const baseAttributes = {
	FOR: { value: getRandomNumber(1, 18), modifier: 0 },
	DES: { value: getRandomNumber(1, 18), modifier: 0 },
	CON: { value: getRandomNumber(1, 18), modifier: 0 },
	INT: { value: getRandomNumber(1, 18), modifier: 0 },
	SAB: { value: getRandomNumber(1, 18), modifier: 0 },
	CAR: { value: getRandomNumber(1, 18), modifier: 0 }
};
