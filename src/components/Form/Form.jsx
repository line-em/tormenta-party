"use client";
import { useForm, FormProvider } from "react-hook-form";
import { addData } from "@/firebase/firestore/addData";
import { useParams } from "next/navigation";
import useDataStore from "@/store/useDataStore";

const Form = ({ children, onSubmit = null, buttonText = "Salvar", ...props }) => {
	const { charData } = useDataStore();
	const params = useParams();
	const decodedCharName = decodeURIComponent(params.name);
	let currentChar;

	if (charData) {
		currentChar = charData.find((char) => char.charName === decodedCharName);
		console.log(currentChar);
	} else {
		alert("Character not found.");
	}

	const methods = useForm({
		mode: "onSubmit",
		resetOptions: {
			keepDirtyValues: true
		},
		shouldUnregister: true,
		defaultValues: {
			currentChar
		}
	});
	const handleChanges = async (data) => {
		console.log("click");
		try {
			console.log("Validation succeeded:", data);
			const { error } = await addData("characters", data.charName, {
				user_uid: user.uid,
				lastUpdate: new Date(),
				...data
			});
			error ? alert(error.message) : alert("Ficha salva!");
		} catch (error) {
			if (error.name === "ValidationError") {
				const validationErrors = error.inner.reduce((errors, err) => {
					return { ...errors, [err.path]: err.message };
				}, {});

				console.error("Validation errors:", validationErrors);
			} else {
				console.error("Other error:", error);
			}
		}
	};

	const watchAllFields = methods.watch();
	console.log({ watchForm: watchAllFields });

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit ? onSubmit : handleChanges)}
				{...props}
			>
				{children}
				<footer>
					<button type="submit">{buttonText}</button>
				</footer>
			</form>
		</FormProvider>
	);
};

export default Form;
