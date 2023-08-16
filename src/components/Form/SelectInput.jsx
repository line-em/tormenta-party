import { useFormContext } from "react-hook-form";

const SelectInput = ({ rowCss, inputCss, id, label, disabled, initialData, options }) => {
	const { register } = useFormContext();

	return (
		<div className={`${rowCss} floating-label`}>
			<select
				id={id}
				className={`${inputCss} floating-select`}
				placeholder=" "
				disabled={disabled}
				{...register(id, {
					value: options.find((option) => option === initialData) || options[0]
				})}
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
