"use client";
import Input from "@/components/Form/Input";
import { useFormContext } from "react-hook-form";
import styles from "../TableComponents/TableComponents.module.css";
import {
	AddRow,
	ColumnHeaders,
	DataTable,
	RemovableRow
} from "../TableComponents/TableComponents";

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
	const attacks = getValues("attacks") || data?.attacks || [];
	const columns = ["Ataque", "Bonus", "Dano", "Crítico", "Tipo", "Alcance"];

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
		<DataTable title="Ataques" icon="sword">
			<ColumnHeaders styles={styles.attackGrid} columns={columns} />
			{attacks.map((attack, index) => (
				<RemovableRow
					key={index}
					styles={styles.attackGrid}
					data={[
						{ label: attack.ataque, isStrong: true },
						{ label: attack.bonus },
						{
							label: attack.dano,
							isStrong: true
						},
						{ label: attack.critico },
						{ label: attack.tipo },
						{ label: attack.alcance }
					]}
					removeFunc={() => removeAttack(index)}
				/>
			))}
			<AddRow styles={styles.addGrid} func={addAttack}>
				<Input id={"new_ataque"} label={"Ataques"} />
				<Input id={"new_bonus"} label={"Bonus"} />
				<Input id={"new_dano"} label={"Dano"} />
				<Input id={"new_critico"} label={"Crítico"} />
				<Input id={"new_tipo"} label={"Tipo"} />
				<Input id={"new_alcance"} label={"Alcance"} />
			</AddRow>
		</DataTable>
	);
};

export default Attacks;
