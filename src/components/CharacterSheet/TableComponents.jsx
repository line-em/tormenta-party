import ModifierButton from "../ModifierButton";

export const ColumnHeaders = ({ styles, columns }) => {
	return (
		<section className={styles}>
			{columns.map((column, index) => (
				<strong key={index}>{column}</strong>
			))}
		</section>
	);
};

export const RemovableRow = ({ styles, row, removeFunc }) => {
	return (
		<ul className={`section-style ${styles} no-padding no-shadow`}>
			{children}
			<ModifierButton func={removeFunc} type="remove" />
		</ul>
	);
};
