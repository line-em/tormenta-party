import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "react-hook-form";

const Textarea = ({
	rowCss,
	inputCss,
	id,
	label,
	disabled,
	initialData,
	cols = 40
	// ...props
}) => {
	// FIXME: remove watch
	// const {
	// 	// register,
	// 	watch,
	// 	formState: { errors }
	// } = useForm({
	// 	mode: "onChange",
	// 	defaultValues: {
	// 		[id]: initialData
	// 	}
	// });

	// FIXME: remove watch
	// const watchAllFields = watch();
	// console.log(watchAllFields);

	const {
		register
		// formState: { errors }
	} = useFormContext();

	return (
		<div className={`${rowCss} floating-label`}>
			<textarea
				id={id}
				className={`${inputCss} floating-input`}
				placeholder=" "
				disabled={disabled}
				// {...register(id)}
				rows={10}
				cols={cols}
				// {...props}
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
