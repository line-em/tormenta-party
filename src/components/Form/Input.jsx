import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ rowCss, inputCss, id, label, disabled, initialData }) => {
	// FIXME: remove watch
	const {
		register,
		watch,
		formState: { errors }
	} = useForm({
		mode: "onChange",
		defaultValues: {
			[id]: initialData
		}
	});

	// FIXME: remove watch
	const watchAllFields = watch();
	// console.log(watchAllFields);

	return (
		<div className={`${rowCss} floating-label`}>
			<input
				type={"text"}
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				{...register(id, { maxLength: 80 })}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default Input;
