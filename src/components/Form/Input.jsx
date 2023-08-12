import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ rowCss, inputCss, id, label, disabled, onChange, type, value }) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		mode: "onChange"
	});

	const registerObj =
		type === "number"
			? {
					...register(`${label}`, {
						pattern: /[0-9]/,
						maxLength: 10,
						valueAsNumber: true
					})
			  }
			: {
					...register(`${label}`, { maxLength: 80 })
			  };

	return (
		<div className={`${rowCss} floating-label`}>
			<input
				type={type}
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				value={value}
				disabled={disabled}
				{...registerObj}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default Input;
