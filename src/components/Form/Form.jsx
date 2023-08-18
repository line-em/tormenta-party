import { useForm, FormProvider } from "react-hook-form";
import Footer from "./Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "./schema";
import { addData } from "@/firebase/firestore/addData";
import { useAuthContext } from "@/context/AuthContext";

const Form = ({ children }) => {
	const { user } = useAuthContext();
	const methods = useForm({
		mode: "onSubmit",
		resolver: yupResolver(FormSchema),
		resetOptions: {
			keepDirtyValues: true
		},
		shouldUnregister: true
	});
	const handleChanges = async (data) => {
		console.log("click");
		try {
			await FormSchema.validate(data, { abortEarly: false });
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
	console.log(watchAllFields);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(handleChanges)}>
				{children}
				{/* {errors === true && <p>An error has been found.</p>} */}
				<Footer />
				{/* <button type="submit">Save</button> */}
				{/* <input type="submit" /> */}
			</form>
		</FormProvider>
	);
};

export default Form;
