import Plus from "@/assets/svgs/Plus";
import Accordion from "../../Accordion";
import ModifierButton from "../../ModifierButton";
import SectionHeading from "@/components/Headings/SectionHeading";

export const DataTable = ({ title, icon, children }) => {
	return (
		<div className="no-padding no-shadow">
			<SectionHeading icon={icon} small>
				{title}
			</SectionHeading>
			{children}
		</div>
	);
};

export const ColumnHeaders = ({ styles, columns }) => {
	return (
		<section className={styles}>
			{columns.map((column, index) => (
				<strong key={index}>{column}</strong>
			))}
		</section>
	);
};

export const RemovableRow = ({ styles, data, removeFunc }) => {
	return (
		<ul className={`section-style ${styles} no-padding no-shadow`}>
			{data.map((item, index) => (
				<li key={item + index} className={item.hasStyle ?? ""}>
					{item.hasCounter ? (
						<>
							<ModifierButton type={"remove"} func={item.counterFunc[0]} />
							{item.label}
							<ModifierButton type={"add"} func={item.counterFunc[1]} />
						</>
					) : item.isStrong ? (
						<strong>{item.label}</strong>
					) : (
						item.label
					)}
				</li>
			))}
			<ModifierButton func={removeFunc} type="remove-alt" />
		</ul>
	);
};

export const AddRow = ({ styles, func, children, prefersClick = true }) => {
	return (
		<Accordion
			prefersClick={prefersClick}
			header={
				<button className={`center extra-mt smaller-padding`}>
					Adicionar <Plus />
				</button>
			}
			content={
				<section className={`${styles} no-shadow no-padding`}>
					{children}
					<ModifierButton func={func} type="add" />
				</section>
			}
		/>
	);
};
