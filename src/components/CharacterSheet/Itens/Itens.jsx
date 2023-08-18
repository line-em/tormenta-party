import Input from "@/components/Form/Input";
import { useFormContext } from "react-hook-form";
import styles from "@/styles/AtaquesItems.module.css";
import ModifierButton from "@/components/ModifierButton";
import Accordion from "@/components/Accordion";
import { ColumnHeaders, DataTable, RemovableRow } from "../TableComponents";
import Money from "@/assets/svgs/Money";
import Remove from "@/assets/svgs/Remove";

const fieldsToReset = ["new_item", "new_peso", "new_qntd"];

const Itens = () => {
	const { setValue, getValues, resetField, unregister } = useFormContext();
	const items = getValues("mochila") || [];

	const resetForm = (fields) => {
		fields.forEach((field) => {
			resetField(field);
		});
		unregister(fields);
	};

	const addItem = () => {
		const newItem = {
			item: getValues("new_item"),
			peso: getValues("new_peso") === "" ? "—" : getValues("new_peso"),
			qntd: getValues("new_qntd") === "" ? 1 : getValues("new_qntd")
		};
		if (!newItem.item) {
			alert("Preencha o campo de item!");
			return;
		} else {
			setValue("mochila", [...items, newItem]);
			console.log({ items });
			resetForm(fieldsToReset);
		}
	};

	const editItemQuantity = (index, action) => {
		const quantityChange = action === "add" ? 1 : -1;
		const updatedItems = items.map((item, i) => {
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
		setValue("mochila", updatedItems);
		resetForm(fieldsToReset);
	};

	const removeItem = (index) => {
		const updateItems = items.filter((_, i) => i !== index);
		setValue("mochila", updateItems);
		resetForm(fieldsToReset);
	};

	return (
		<DataTable title="Inventário" icon="items">
			{Coins}
			<section className={`grid no-padding no-shadow`}>
				<ColumnHeaders
					styles={`${styles.itemGrid} + ${styles.marginNull} ${styles.center} margin-null`}
					columns={[
						"Item",
						"Peso",
						"Quantidade",
						<Remove width={22} height={22} />
					]}
				/>
				<ColumnHeaders
					styles={`${styles.itemGrid} + ${styles.marginNull} ${styles.center} margin-null`}
					columns={[
						"Item",
						"Peso",
						"Quantidade",
						<Remove width={22} height={22} />
					]}
				/>
			</section>
			<section className={`grid no-padding no-shadow ${styles.smallGap}`}>
				{items.map((item, index) => (
					<RemovableRow
						styles={styles.itemGrid}
						data={[
							{ label: item.item, isStrong: true },
							{ label: item.peso, isStrong: false },
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
			<Accordion
				header={
					<button className={`center extra-mt smaller-padding`}>
						Adicionar Item
					</button>
				}
				content={
					<section
						className={`${styles.itemGrid} ${styles.addGrid} no-shadow no-padding`}
					>
						<Input id={"new_item"} label={"Item"} />
						<Input id={"new_peso"} label={"Peso"} />
						<Input id={"new_qntd"} label={"Qntd"} />
						<ModifierButton func={addItem} type="add" />
					</section>
				}
			/>
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
