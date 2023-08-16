import { useForm, FormProvider } from "react-hook-form";
import Footer from "./Footer";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "./schema";

const Form = ({ children }) => {
	const methods = useForm({
		mode: "onSubmit"
		// resolver: yupResolver(FormSchema)
	});

	// const handleChanges = (data) => {
	// 	console.log("click");
	// 	try {
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const handleChanges = async (data) => {
		console.log("click");
		try {
			await FormSchema.validate(data, { abortEarly: false });
			console.log("Validation succeeded:", data);
			console.log({ data });
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
	// await new Promise((resolve) => {
	// 	setTimeout(() => {
	// 		alert(JSON.stringify(data));
	// 		resolve(undefined);
	// 	}, 3000);
	// });

	const watchAllFields = methods.watch();
	console.log(watchAllFields);

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(handleChanges)}>
				{children}
				{/* {errors === true && <p>An error has been found.</p>} */}
				{/* {<Footer isLocked={isLocked} setIsLocked={setIsLocked} />} */}
				<input type="submit" />
				{/* <button type="submit">Save</button> */}
			</form>
		</FormProvider>
	);
};

export default Form;
