import { isNumberKey } from "@/app/utils";
import styles from "./Forms.module.css";
import { useForm } from "react-hook-form";
import Input from "../Form/Input";

const BasicInfo = ({ isLocked }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		mode: "onChange"
	});

	const handleChanges = (data) => console.log(data);

	return (
		<form onSubmit={handleSubmit(handleChanges)} className={styles.basic}>
			<Input
				rowCss={styles.span2}
				inputCss="big"
				id={"nome"}
				label={"Nome"}
				disabled={isLocked}
				type="text"
			/>
			<Input id={"raca"} label={"Raça"} disabled={isLocked} type="text" />
			<Input id={"origem"} label={"Origem"} disabled={isLocked} type="text" />
			<Input id={"classe"} label={"Classe"} disabled={isLocked} type="text" />

			<div className="floating-label">
				<input
					type="number"
					id="lvl"
					disabled={isLocked}
					className="floating-input"
					onKeyDown={(e) => isNumberKey(e)}
					{...register("Nivel", { maxLength: 2 })}
				/>
				<label htmlFor="lvl" className="floating-text">
					Nível
				</label>
			</div>
			{/* <button type="submit">ddd</button> */}
			{errors === true && <p>An error has been found.</p>}
		</form>
	);
};

export default BasicInfo;
