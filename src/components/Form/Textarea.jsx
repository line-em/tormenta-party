import React from "react";
import { useFormContext } from "react-hook-form";

const Textarea = ({ rowCss, inputCss, id, label, disabled, initialData, cols = 37 }) => {
	const { register } = useFormContext();

	return (
		<div className={`${rowCss} floating-label`}>
			<textarea
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				rows={11}
				cols={cols}
				{...register(id, {
					value: initialData || ""
				})}
			/>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default Textarea;
