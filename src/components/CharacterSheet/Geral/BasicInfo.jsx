import NumberInput from "@/components/Form/NumberInput";
import Input from "../../Form/Input";
import styles from "./BasicInfo.module.css";

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
			<Input
				id={"origem"}
				initialData={data?.origem}
				label={"Origem"}
				disabled={isLocked}
			/>
			<Input
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				disabled={isLocked}
			/>
			<NumberInput
				id={"lvl"}
				initialData={data?.level}
				label={"Nível"}
				disabled={isLocked}
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
