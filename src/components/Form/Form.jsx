import { useForm } from "react-hook-form";
import Footer from "./Footer";

const Form = ({ children }) => {
	// Depois deixar o onSubmit as a prop. FIXME:
	const {
		handleSubmit,
		register,
		formState: { errors, touchedFields }
	} = useForm({
		mode: "onBlur"
	});
	const handleChanges = (data) => {
		console.log("click");
		try {
			console.log(data);
			console.log(touchedFields);
		} catch (error) {
			console.log(error);
			console.log(errors);
		}
	};

	return (
		<form onSubmit={handleSubmit(handleChanges)}>
			{children}
			{errors === true && <p>An error has been found.</p>}
			{<Footer />}
		</form>
	);
};

export default Form;
