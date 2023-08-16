import React, { useState } from "react";
import Textarea from "@/components/Form/Textarea";
import { useForm } from "react-hook-form";
import Actions from "@/assets/svgs/Actions";

const Notas = ({ data }) => {
	const { getValues, handleSubmit, setValue, register } = useForm();

	const [fields, setFields] = useState(
		data?.notas || [
			{
				label: "Notas Adicionais",
				id: "notas1",
				content: ""
			}
		]
	);

	const handleAddField = () => {
		const newFieldLabel = prompt("Título da Nota: ");
		if (!newFieldLabel) {
			return;
		}

		setFields((prevFields) => [
			...prevFields,
			{
				label: newFieldLabel,
				id: `notas${prevFields.length + 1}`,
				content: ""
			}
		]);
		console.log(fields);
	};

	const handleRemoveField = (id) => {
		setFields((prevFields) => prevFields.filter((field) => field.id !== id));
	};

	const onSubmit = () => {
		const values = getValues();
		const updatedFields = fields.map((field) => ({
			...field,
			content: values[field.id]
		}));
		console.log(updatedFields);
	};

	return (
		<>
			<button className="fit center secondary" onClick={handleAddField}>
				Adicionar Notas <Actions />
			</button>
			<form onSubmit={handleSubmit(onSubmit)}>
				<section className="no-padding no-shadow grid place-center">
					{fields.map((field) => (
						<div key={field.id}>
							<Textarea
								id={field.id}
								initialData={field.content}
								label={field.label}
								cols={25}
							/>
							<button
								onClick={() => handleRemoveField(field.id)}
								className="fit center secondary"
							>
								Remover
							</button>
						</div>
					))}
				</section>
			</form>
		</>
	);
};

export default Notas;
