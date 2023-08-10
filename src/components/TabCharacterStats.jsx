import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm();
	const onSubmit = (data) => console.log(data);
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type="text"
				id="nome"
				aria-invalid={errors.nome ? "true" : "false"}
				placeholder="Nome do Personagem"
				{...register("Nome do Personagem", { required: true, maxLength: 80 })}
			/>
			<input
				type="text"
				placeholder="Origem"
				{...register("Origem", { required: true, pattern: /fff/i })}
			/>
			<input
				type="text"
				placeholder="Classe"
				{...register("Classe", { required: true, pattern: /ddd/i })}
			/>
			<input
				type="text"
				placeholder="Nível"
				{...register("Nível", { maxLength: 2 })}
			/>
			<input
				type="text"
				placeholder="Raça"
				{...register("Raça", { required: true, pattern: /ffff/i })}
			/>
			<input
				type="text"
				placeholder="Vida"
				{...register("Vida", { maxLength: 3 })}
			/>
			<input
				type="text"
				placeholder="Vida Atual"
				{...register("Vida Atual", { required: true, maxLength: 3 })}
			/>
			<input
				type="text"
				placeholder="Mana"
				{...register("Mana", { maxLength: 3 })}
			/>
			<input
				type="text"
				placeholder="Mana Atual"
				{...register("Mana Atual", { maxLength: 3 })}
			/>
			{errors.nome && <span role="alert">This field is required</span>}
			<input type="submit" />
		</form>
	);
}
