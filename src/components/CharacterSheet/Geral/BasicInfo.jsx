import NumberInput from "@/components/Form/NumberInput";
import Input from "../../Form/Input";
import styles from "./BasicInfo.module.css";
import SelectInput from "@/components/Form/SelectInput";
import { todasOrigens } from "@/data/origens";
import { todasLinhagens } from "@/data/linhagens";

const BasicInfo = ({ isLocked, data }) => {
	// console.log(data.charName);
	return (
		<article className={styles.basic}>
			<Input
				rowCss={styles.span3}
				inputCss="big"
				id="charName"
				initialData={data?.charName}
				label={"Nome"}
				disabled={isLocked}
			/>
			<SelectInput
				id="raca"
				rowCss={styles.span2}
				label={"Raça"}
				initialData={data?.raca}
				disabled={isLocked}
				inputCss="big"
				options={todasLinhagens}
			/>
			<SelectInput
				id={"lvl"}
				inputCss="big"
				label={"Level"}
				disabled={isLocked}
				initialData={data?.lvl}
				options={Array.from({ length: 10 }, (_, index) => index + 1)}
			/>
			<SelectInput
				rowCss={styles.span2}
				id={"origem"}
				label={"Origem"}
				initialData={data?.origem}
				disabled={isLocked}
				options={todasOrigens}
			/>
			<Input
				rowCss={styles.span2}
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				disabled={isLocked}
			/>
			<Input
				id={"religiao"}
				initialData={data?.divindade}
				label={"Religião"}
				disabled={isLocked}
			/>
			<Input
				id={"xp"}
				initialData={data?.divindade}
				label={"Experiência"}
				disabled={isLocked}
			/>
		</article>
	);
};

export default BasicInfo;
