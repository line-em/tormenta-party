import Input from "@/components/Form/Input";
import SectionHeading from "@/components/Headings/SectionHeading";
import { useFormContext } from "react-hook-form";
import styles from "@/styles/AtaquesItems.module.css";
import ModifierButton from "@/components/ModifierButton";
import Accordion from "@/components/Accordion";

const fieldsToReset = [
	"new_ataque",
	"new_bonus",
	"new_dano",
	"new_critico",
	"new_tipo",
	"new_alcance"
];

const Attacks = ({ data }) => {
	const { setValue, getValues, resetField, unregister } = useFormContext();
	const attacks = getValues("attacks") || [];

	const resetForm = (fields) => {
		fields.forEach((field) => {
			resetField(field);
		});
		unregister(fields);
	};

	const addAttack = () => {
		const newAttack = {
			ataque: getValues("new_ataque"),
			bonus: getValues("new_bonus") === "" ? "—" : getValues("new_bonus"),
			dano: getValues("new_dano"),
			critico: getValues("new_critico") === "" ? "—" : getValues("new_critico"),
			tipo: getValues("new_tipo") === "" ? "—" : getValues("new_tipo"),
			alcance: getValues("new_alcance") === "" ? "—" : getValues("new_alcance")
		};
		if (!newAttack.ataque) {
			alert("Preencha o campo de ataque!");
			return;
		} else if (!newAttack.dano) {
			alert("Preencha o campo de dano!");
			return;
		} else {
			setValue("attacks", [...attacks, newAttack]);
			resetForm(fieldsToReset);
		}
	};

	const removeAttack = (index) => {
		const updatedAttacks = attacks.filter((_, i) => i !== index);
		setValue("attacks", updatedAttacks);
		resetForm(fieldsToReset);
	};

	return (
		<div>
			<SectionHeading icon="sword" small>
				Ataques
			</SectionHeading>
			<section className={`${styles.attackGrid}`}>
				<strong>Ataques</strong>
				<strong>Bonus</strong>
				<strong>Dano</strong>
				<strong>Crítico</strong>
				<strong>Tipo</strong>
				<strong>Alcance</strong>
			</section>
			{attacks?.map((attack, index) => (
				<ul
					key={attack.ataque + index}
					className={`section-style ${styles.attackGrid} no-padding no-shadow`}
				>
					<li>
						<strong>{attack.ataque}</strong>
					</li>
					<li>{attack.bonus}</li>
					<li>
						<strong>{attack.dano}</strong>
					</li>
					<li>{attack.critico}</li>
					<li>{attack.tipo}</li>
					<li>{attack.alcance}</li>
					<ModifierButton func={() => removeAttack(index)} type="remove" />
				</ul>
			))}

			<Accordion
				header={
					<button className="secondary fit center">Adicionar Ataque</button>
				}
				content={
					<section className={`${styles.addGrid} no-shadow no-padding`}>
						<Input id={"new_ataque"} label={"Ataques"} />
						<Input id={"new_bonus"} label={"Bonus"} />
						<Input id={"new_dano"} label={"Dano"} />
						<Input id={"new_critico"} label={"Crítico"} />
						<Input id={"new_tipo"} label={"Tipo"} />
						<Input id={"new_alcance"} label={"Alcance"} />
						<ModifierButton func={addAttack} type="add" />
					</section>
				}
			/>
		</div>
	);
};

export default Attacks;
