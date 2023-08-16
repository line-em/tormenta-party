import Input from "@/components/Form/Input";
import SectionHeading from "@/components/Headings/SectionHeading";
import { useFormContext } from "react-hook-form";
import styles from "@/styles/AtaquesItems.module.css";
import ModifierButton from "@/components/ModifierButton";

const Attacks = ({ data }) => {
	// FIXME: quando clica no addAtaque, GERA um attacks no database. MAS continuam la, strings do tipo, ataque, bonus, tipo, etc. Era pra sempre estar dentro do attacks.
	const { setValue, getValues } = useFormContext();
	const attacks = getValues("attacks") || [];

	const addAttack = () => {
		const newAttack = {
			ataque: getValues("ataque"),
			bonus: getValues("bonus") === "" ? "—" : getValues("bonus"),
			dano: getValues("dano"),
			critico: getValues("critico") === "" ? "—" : getValues("critico"),
			tipo: getValues("tipo") === "" ? "—" : getValues("tipo"),
			alcance: getValues("alcance") === "" ? "—" : getValues("alcance")
		};
		if (!newAttack.ataque) {
			alert("Preencha o campo de ataque!");
			return;
		} else if (!newAttack.dano) {
			alert("Preencha o campo de dano!");
			return;
		} else {
			setValue("attacks", [...attacks, newAttack]);
			console.log({ attacks });
		}
	};

	const removeAttack = (index) => {
		const updatedAttacks = attacks.filter((_, i) => i !== index);
		setValue("attacks", updatedAttacks);
	};
	return (
		<div>
			<SectionHeading icon="sword" small>
				Ataques
			</SectionHeading>
			<section className={`${styles.addAttackGrid}`}>
				<strong>Ataques</strong>
				<strong>Bonus</strong>
				<strong>Dano</strong>
				<strong>Crítico</strong>
				<strong>Tipo</strong>
				<strong>Alcance</strong>
			</section>
			{attacks?.map((attack, index) => (
				<ul
					className={`section-style ${styles.addAttackGrid} no-padding no-shadow`}
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

			<section className={`${styles.addAttackGrid} no-padding no-shadow`}>
				<Input id={"ataque"} label={"Ataques"} />
				<Input id={"bonus"} label={"Bonus"} />
				<Input id={"dano"} label={"Dano"} />
				<Input id={"critico"} label={"Crítico"} />
				<Input id={"tipo"} label={"Tipo"} />
				<Input id={"alcance"} label={"Alcance"} />
				<ModifierButton func={addAttack} type="add" />
			</section>
		</div>
	);
};

export default Attacks;
