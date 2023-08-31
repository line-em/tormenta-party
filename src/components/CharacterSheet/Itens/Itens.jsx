"use client";
import { useFormContext } from "react-hook-form";
import styles from "../TableComponents/TableComponents.module.css";
import {
	AddRow,
	ColumnHeaders,
	DataTable,
	RemovableRow
} from "../TableComponents/TableComponents";
import Input from "@/components/Form/Input";
import Money from "@/assets/svgs/Money";

const fieldsToReset = ["new_item", "new_space", "new_qntd"];

const Itens = ({ data }) => {
	const { setValue, getValues, resetField, unregister } = useFormContext();
	const itens = getValues("itens") || data?.itens || [];
	const columns = ["Item", "Slot", "Quantidade"];

	const resetForm = (fields) => {
		fields.forEach((field) => {
			resetField(field);
		});
		unregister(fields);
	};

	const addItem = (e) => {
		console.log("add item");
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
		const newItem = {
			item: getValues("new_item"),
			espaco: getValues("new_space") === "" ? "—" : getValues("new_space"),
			qntd: getValues("new_qntd") === "" ? 1 : getValues("new_qntd")
		};
		if (!newItem.item) {
			alert("Preencha o campo de item!");
			return;
		} else {
			setValue("itens", [...itens, newItem]);
			console.log({ itens });
			resetForm(fieldsToReset);
		}
	};

	const editItemQuantity = (index, action) => {
		const quantityChange = action === "add" ? 1 : -1;
		const updatedItens = itens.map((item, i) => {
			let currentQuantity = parseInt(item.qntd) || 0;
			const newQuantity = currentQuantity + quantityChange;
			if (i === index) {
				return {
					...item,
					qntd: newQuantity
				};
			}
			return item;
		});
		setValue("itens", updatedItens);
		resetForm(fieldsToReset);
	};

	const removeItem = (index) => {
		const updateItens = itens.filter((_, i) => i !== index);
		setValue("itens", updateItens);
		resetForm(fieldsToReset);
	};

	return (
		<DataTable title="Inventário" icon="items">
			{Coins}
			<section className={`grid no-padding no-shadow`}>
				<ColumnHeaders
					styles={`${styles.itemGrid} + ${styles.center} margin-null`}
					columns={columns}
				/>
				<ColumnHeaders
					styles={`${styles.itemGrid} + ${styles.center} margin-null`}
					columns={columns}
				/>
			</section>
			<section
				className={`grid no-padding no-shadow ${styles.smallGap} margin-half`}
			>
				{itens.map((item, index) => (
					<RemovableRow
						key={index}
						styles={styles.itemGrid}
						data={[
							{ label: item.item, isStrong: true },
							{ label: item.espaco },
							{
								label: item.qntd,
								hasCounter: true,
								counterFunc: [
									() => editItemQuantity(index, "remove"),
									() => editItemQuantity(index, "add")
								],
								hasStyle: styles.withModifier
							}
						]}
						removeFunc={() => removeItem(index)}
					/>
				))}
			</section>
			<AddRow
				styles={`${styles.itemGrid} + ${styles.addGrid}`}
				func={(e) => addItem(e)}
			>
				<Input id={"new_item"} label={"Item"} />
				<Input id={"new_space"} label={"Slot"} />
				<Input id={"new_qntd"} label={"Qntd"} />
			</AddRow>
		</DataTable>
	);
};

const Coins = (
	<ul className="section-style grid no-shadow no-padding">
		<li className="section-style grid auto-grid  no-shadow no-padding">
			<Money width={35} height={35} />
			<Input id={"tibares_ouro"} label={"Tibares Ouro"} />
		</li>
		<li className="section-style grid auto-grid  no-shadow no-padding">
			<Money width={35} height={35} />
			<Input id={"tibares"} label={"Tibares"} />
		</li>
	</ul>
);

export default Itens;
