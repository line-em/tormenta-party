import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";

import { isNumberKey } from "@/app/utils";
const NumberInput = ({ rowCss, inputCss, id, label, disabled, initialData }) => {
	// FIXME: NOT BEING USED SO FAR
	const {
		register
		// formState: { errors }
	} = useFormContext();

	return (
		<div className={`${rowCss} floating-label`}>
			<input
				type="number"
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				{...register(id, {
					value: initialData,
					validate: (value) => isNumberKey(value)
				})}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default NumberInput;
