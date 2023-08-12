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
		<form onSubmit={onSubmit} className={styles.basic}>
			{children}
			{errors === true && <p>An error has been found.</p>}
		</form>
	);
};

export default Form;
