import Input from "@/components/Form/Input";
import SectionHeading from "@/components/Headings/SectionHeading";
import { useFormContext } from "react-hook-form";
import styles from "@/styles/AtaquesItems.module.css";
import ModifierButton from "@/components/ModifierButton";

const Itens = ({ data }) => {
	// FIXME: mesmo problema do Attacks.
	const { setValue, getValues } = useFormContext();
	const items = getValues("mochila") || [];

	const addItem = () => {
		const newItem = {
			mochila_item: getValues("mochila_item"),
			mochila_peso:
				getValues("mochila_peso") === "" ? "—" : getValues("mochila_peso"),
			mochila_qntd:
				getValues("mochila_qntd") === "" ? "—" : getValues("mochila_qntd")
		};
		if (!newItem.mochila_item) {
			alert("Preencha o campo de item!");
			return;
		} else {
			setValue("mochila", [...items, newItem]);
			console.log({ items });
		}
	};

	const editItemQuantity = (index, action) => {
		const quantityChange = action === "add" ? 1 : -1;

		const updatedItems = items.map((item, i) => {
			let currentQuantity = parseInt(item.mochila_qntd) || 0;
			const newQuantity = currentQuantity + quantityChange;
			if (i === index) {
				return {
					...item,
					mochila_qntd: newQuantity
				};
			}
			return item;
		});

		setValue("mochila", updatedItems);
	};

	const removeItem = (index) => {
		const updateItems = items.filter((_, i) => i !== index);
		setValue("mochila", updateItems);
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
				<ul className={`section-style ${styles.itemGrid} no-padding no-shadow`}>
					<li>
						<strong>{item.mochila_item}</strong>
					</li>
					<li>{item.mochila_peso}</li>
					{/* <li>{item.mochila_qntd}</li> */}
					<li className={styles.withModifier}>
						{" "}
						<ModifierButton
							type={"remove"}
							func={() => editItemQuantity(index, "remove")}
						/>
						{item.mochila_qntd}
						<ModifierButton
							type={"add"}
							func={() => editItemQuantity(index, "add")}
						/>
					</li>
					<ModifierButton func={() => removeItem(index)} type="remove" />
				</ul>
			))}
			<section className={`${styles.itemGrid} no-padding no-shadow`}>
				<Input id={"mochila_item"} label={"Item"} />
				<Input id={"mochila_peso"} label={"Peso"} />
				<Input id={"mochila_qntd"} label={"Quantidade"} />
				<ModifierButton func={addItem} type="add" />
			</section>
		</div>
	);
};

export default Itens;
