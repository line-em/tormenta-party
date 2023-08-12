import React from "react";
import { useForm } from "react-hook-form";

const Input = ({
	rowCss,
	inputCss,
	id,
	label,
	disabled,
	onChange,
	type,
	value,
	placeholder
}) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({
		mode: "onChange"
	});

	return (
		<div className={`${rowCss} floating-label`}>
			<input
				type={type}
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				{...register(`${label}`, { maxLength: 80 })}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default Input;
