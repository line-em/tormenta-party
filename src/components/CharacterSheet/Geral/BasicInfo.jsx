import NumberInput from "@/components/Form/NumberInput";
import Input from "../../Form/Input";
import styles from "./BasicInfo.module.css";
import SelectInput from "@/components/Form/SelectInput";
import StatusBar from "./StatusBar";
import { todasOrigens } from "@/data/origens";
import { todasLinhagens } from "@/data/linhagens";

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
			<SelectInput
				id={"level"}
				inputCss="big"
				label={"Level"}
				disabled={isLocked}
				initialData={data?.level}
				options={Array.from({ length: 20 }, (_, index) => index + 1)}
			/>
			<Input
				id={"xp"}
				initialData={data?.xp}
				label={"XP"}
				inputCss="big"
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
			<Input
				rowCss={styles.span3}
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				inputCss="big"
				disabled={isLocked}
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
				id={"religiao"}
				rowCss={styles.span2}
				initialData={data?.divindade}
				label={"Religião"}
				disabled={isLocked}
			/>
			<Input
				// rowCss={styles.span2}
				id={"deslocamento"}
				initialData={data?.divindade}
				label={"Movimento"}
				disabled={isLocked}
			/>
		</article>
	);
};

export default BasicInfo;
