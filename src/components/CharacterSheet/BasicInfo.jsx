import { isNumberKey } from "@/app/utils";
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
					disabled={isLocked}
					placeholder=" "
					className="floating-input"
					{...register("Raça", { maxLength: 80 })}
				/>
				<label htmlFor="raca" className="floating-text">
					Raça
				</label>
			</div>
			<input
				type="text"
				id="nome"
				disabled={isLocked}
				placeholder="Origem"
				{...register("Origem", { maxLength: 80 })}
			/>
			<input
				type="text"
				id="nome"
				disabled={isLocked}
				placeholder="Classe"
				{...register("Classe", { maxLength: 80 })}
			/>
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
