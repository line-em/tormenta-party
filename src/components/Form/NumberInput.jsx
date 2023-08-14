import React from "react";
import { useForm } from "react-hook-form";
import { isNumberKey } from "@/app/utils";
const NumberInput = ({ rowCss, inputCss, id, label, disabled, initialData }) => {
	// FIXME: remove watch
	const { register, watch } = useForm({
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
				type="number"
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				{...register(id, {
					maxLength: 3,
					min: 0,
					max: 100,
					required: true,
					valueAsNumber: true,
					validate: (value) => isNumberKey(value),
					pattern: {
						value: /^[0-9]*[1-9][0-9]*$/,
						message: "Input must be a number greater than 0."
					}
				})}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default NumberInput;
