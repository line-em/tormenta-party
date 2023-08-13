import { useForm } from "react-hook-form";
import Footer from "../CharacterSheet/Footer";

const Form = ({ onSubmit, children, styled, hasButton = false }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		mode: "onChange"
	});

	const handleChanges = (data) => console.log(data);

	return (
		<form onSubmit={onSubmit}>
			{children}
			{errors === true && <p>An error has been found.</p>}
			{hasButton && <Footer />}
		</form>
	);
};

export default Form;
