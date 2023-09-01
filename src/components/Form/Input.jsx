"use client";
import React from "react";
import { useFormContext } from "react-hook-form";

const Input = ({
	rowCss = "",
	inputCss = "",
	id,
	label,
	disabled,
	type = "text",
	...props
}) => {
	const { register } = useFormContext();
	return (
		<div className={`${rowCss && rowCss} floating-label`}>
			<input
				type={type}
				id={id}
				className={`${inputCss && inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				{...register(id, { ...props })}
			/>
			<label htmlFor={id} className={`${inputCss && inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default Input;
