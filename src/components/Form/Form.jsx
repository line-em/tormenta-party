import { useForm } from "react-hook-form";
import styles from "./Forms.module.css";

const Form = ({ onSubmit, func, children }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		mode: "onChange"
	});

	const handleChanges = (data) => console.log(data);

	return (
		<form
			// onSubmit={onSubmit}
			// onChange={handleSubmit(handleChanges)}
			className={styles.basic}
		>
			{children}
			{errors === true && <p>An error has been found.</p>}
			{/* <button type="submit">Submit</button> */}
		</form>
	);
};

export default Form;
