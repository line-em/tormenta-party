import * as yup from "yup";

export const FormSchema = yup.object().shape({
	charName: yup.string().required("Name is required"),
	level: yup.number().positive().max(20).required("Level is required"),
	xp: yup.number().positive().required("XP is required"),
	raca: yup.string().required("Raça is required"),
	classe: yup.mixed().required("Classe is required"),
	origem: yup.string().required("Origem is required"),
	divindade: yup.string().required("Religião is required"),
	deslocamento: yup.string().required("Movimento is required"),
	smallNotes: yup.string(),
	notas: yup.mixed()
});
