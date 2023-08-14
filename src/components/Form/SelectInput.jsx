import { useForm } from "react-hook-form";
const SelectInput = ({ rowCss, inputCss, id, label, disabled, initalData, options }) => {
	// FIXME: remove watch
	const { register, watch } = useForm({
		mode: "onChange",
		defaultValues: {
			[id]: initalData || options[0]
		}
	});
	// FIXME: remove watch
	const watchAllFields = watch();
	console.log(watchAllFields);

	return (
		<div className={`${rowCss} floating-label`}>
			<select
				id={id}
				className={`${inputCss} floating-select`}
				placeholder=" "
				disabled={disabled}
				{...register(id)}
			>
				{options.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))}
			</select>
			<label htmlFor={id} className={`${inputCss} floating-text`}>
				{label}
			</label>
		</div>
	);
};

export default SelectInput;
