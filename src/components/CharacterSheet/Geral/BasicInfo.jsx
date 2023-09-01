import Input from "../../Form/Input";
import styles from "./BasicInfo.module.css";
import SelectInput from "@/components/Form/SelectInput";
import { todasOrigens } from "@/data/origens";
import { todasLinhagens } from "@/data/linhagens";
import { Attributes } from "@/components/Attributes/Attributes";

const BasicInfo = () => {
	return (
		<article className={styles.basic}>
			<Input
				rowCss={styles.span3}
				inputCss="big"
				id="charName"
				label={"Nome"}
				disabled
			/>
			<SelectInput
				id={"level"}
				inputCss="big"
				label={"Level"}
				options={Array.from({ length: 20 }, (_, index) => index + 1)}
			/>
			<Input 
			id={"xp"} 
			label={"XP"} 
			inputCss="big" 
			/>
			<SelectInput
				id="raca"
				rowCss={styles.span2}
				label={"Raça"}
				options={todasLinhagens}
			/>
			<Input
				rowCss={styles.span3}
				id={"classe"}
				label={"Classe"}
			/>
			<SelectInput
				rowCss={styles.span2}
				id={"origem"}
				label={"Origem"}
				options={todasOrigens}
			/>
			<Input
				id={"divindade"}
				rowCss={styles.span2}
				label={"Religião"}
			/>
			<Input
				id={"deslocamento"}
				label={"Desloc."}
			/>
			<Attributes />
		</article>
	);
};

export default BasicInfo;
