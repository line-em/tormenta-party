import { useForm } from "react-hook-form";
import Footer from "./Footer";

const Form = ({ children }) => {
	// Depois deixar o onSubmit as a prop. FIXME:
	const {
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: "onSubmit"
	});
	const handleChanges = (data) => {
		console.log("click");
		console.log(data);
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
