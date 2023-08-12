import Divider from "@/assets/svgs/Divider";
import styles from "./Forms.module.css";
import { useForm } from "react-hook-form";

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
			<div className={`${styles.span2} floating-label`}>
				<input
					type="text"
					id="nome"
					className="big floating-input"
					placeholder=" "
					disabled={isLocked}
					{...register("Nome do Personagem", { maxLength: 80 })}
				/>
				<label htmlFor="nome" className="floating-text big">
					Nome do Personagem
				</label>
				{/* <Divider /> */}
			</div>
			<div className="floating-label">
				<input
					type="text"
					id="raca"
					placeholder="Raça"
					className="transparent floating-input"
					{...register("Raça", { maxLength: 80 })}
				/>
				<label htmlFor="raca" className="floating-text">
					Raça
				</label>
			</div>
			<input
				type="text"
				id="nome"
				placeholder="Origem"
				{...register("Origem", { maxLength: 80 })}
			/>
			<input
				type="text"
				id="nome"
				placeholder="Classe"
				{...register("Classe", { maxLength: 80 })}
			/>
			<input
				type="text"
				id="nome"
				placeholder="Nivel"
				{...register("Nivel", { maxLength: 80 })}
			/>
			{/* <button type="submit">ddd</button> */}
			{errors === true && <p>An error has been found.</p>}
		</form>
	);
};

export default BasicInfo;
