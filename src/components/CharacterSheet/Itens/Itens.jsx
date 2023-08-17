import Input from "@/components/Form/Input";
import SectionHeading from "@/components/Headings/SectionHeading";
import { useFormContext } from "react-hook-form";
import styles from "@/styles/AtaquesItems.module.css";
import ModifierButton from "@/components/ModifierButton";

const Itens = ({ data }) => {
	const { setValue, getValues, resetField, unregister } = useFormContext();
	const items = getValues("mochila") || [];

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

			const fieldsToReset = ["new_item", "new_peso", "new_qntd"];

			fieldsToReset.forEach((field) => {
				resetField(field);
			});

			unregister(fieldsToReset);
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

			const fieldsToReset = ["new_item", "new_peso", "new_qntd"];

			fieldsToReset.forEach((field) => {
				resetField(field);
			});

			unregister(fieldsToReset);

			return item;
		});

		setValue("mochila", updatedItems);
	};

	const removeItem = (index) => {
		const updateItems = items.filter((_, i) => i !== index);
		setValue("mochila", updateItems);

		const fieldsToReset = ["new_item", "new_peso", "new_qntd"];

		fieldsToReset.forEach((field) => {
			resetField(field);
		});

		unregister(fieldsToReset);
	};
	return (
		<div>
			<SectionHeading icon="dinheiro" small>
				Riqueza
			</SectionHeading>
			<ul className="section-style grid no-shadow">
				<li>
					<Input id={"tibares_ouro"} label={"Tibares Ouro"} />
				</li>
				<li>
					<Input id={"tibares"} label={"Tibares"} />
				</li>
			</ul>
			<SectionHeading icon="items" small>
				Inventário
			</SectionHeading>
			<section className={`${styles.itemGrid}`}>
				<strong>Item</strong>
				<strong>Peso</strong>
				<strong>Quantidade</strong>
			</section>
			{items?.map((item, index) => (
				<ul
					className={`section-style ${styles.itemGrid} no-padding no-shadow`}
					key={item.item + index}
				>
					<li>
						<strong>{item.item}</strong>
					</li>
					<li>{item.peso}</li>
					<li className={styles.withModifier}>
						{" "}
						<ModifierButton
							type={"remove"}
							func={() => editItemQuantity(index, "remove")}
						/>
						{item.qntd}
						<ModifierButton
							type={"add"}
							func={() => editItemQuantity(index, "add")}
						/>
					</li>
					<ModifierButton func={() => removeItem(index)} type="remove" />
				</ul>
			))}
			<section className={`${styles.itemGrid} no-padding no-shadow`}>
				<Input id={"new_item"} label={"Item"} />
				<Input id={"new_peso"} label={"Peso"} />
				<Input id={"new_qntd"} label={"Quantidade"} />
				<ModifierButton func={addItem} type="add" />
			</section>
		</div>
	);
};

export default Itens;
