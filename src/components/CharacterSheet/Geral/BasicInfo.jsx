import NumberInput from "@/components/Form/NumberInput";
import Input from "../../Form/Input";
import styles from "./BasicInfo.module.css";
import SelectInput from "@/components/Form/SelectInput";
import { todasOrigens } from "@/data/origens";

const BasicInfo = ({ isLocked, data }) => {
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
			<Input
				id="raca"
				label={"Raça"}
				initialData={data?.raca}
				disabled={isLocked}
				inputCss="big"
			/>
			<SelectInput
				id={"origem"}
				label={"Origem"}
				disabled={isLocked}
				options={todasOrigens}
			/>
			<Input
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				disabled={isLocked}
			/>
			<SelectInput
				id={"lvl"}
				label={"Level"}
				disabled={isLocked}
				options={Array.from({ length: 10 }, (_, index) => index + 1)}
			/>
			<Input
				id={"religiao"}
				initialData={data?.divindade}
				label={"Religião"}
				disabled={isLocked}
			/>
		</article>
	);
};

export default BasicInfo;
