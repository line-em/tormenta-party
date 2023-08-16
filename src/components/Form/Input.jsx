import React from "react";
import { useFormContext } from "react-hook-form";
// import { useForm } from "react-hook-form";

const Input = ({ rowCss, inputCss, id, label, disabled, initialData }) => {
	// const {
	// 	register,
	// 	watch,
	// 	formState: { errors }
	// } = useForm({
	// 	mode: "onChange",
	// 	defaultValues: {
	// 		[id]: initialData
	// 	}
	// });

	const {
		register
		// formState: { errors }
	} = useFormContext();

	return (
		<div className={`${rowCss} floating-label`}>
			<input
				type="text"
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				{...register(id, { value: initialData || "" })}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default Input;
