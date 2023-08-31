import Input from "../../Form/Input";
import styles from "./BasicInfo.module.css";
import SelectInput from "@/components/Form/SelectInput";
import { todasOrigens } from "@/data/origens";
import { todasLinhagens } from "@/data/linhagens";
import Attributes from "@/components/Attributes/Attributes";

const BasicInfo = ({ data }) => {
	return (
		<article className={styles.basic}>
			<Input
				rowCss={styles.span3}
				inputCss="big"
				id="charName"
				initialData={data?.charName}
				label={"Nome"}
			/>
			<SelectInput
				id={"level"}
				inputCss="big"
				label={"Level"}
				initialData={data?.level}
				options={Array.from({ length: 20 }, (_, index) => index + 1)}
			/>
			<Input id={"xp"} initialData={data?.xp} label={"XP"} inputCss="big" />
			<SelectInput
				id="raca"
				rowCss={styles.span2}
				label={"Raça"}
				initialData={data?.raca}
				// inputCss="big"
				options={todasLinhagens}
			/>
			<Input
				rowCss={styles.span3}
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				// inputCss="big"
			/>
			<SelectInput
				rowCss={styles.span2}
				id={"origem"}
				label={"Origem"}
				initialData={data?.origem}
				options={todasOrigens}
			/>
			<Input
				id={"divindade"}
				rowCss={styles.span2}
				initialData={data?.divindade}
				label={"Religião"}
			/>
			<Input
				// rowCss={styles.span2}
				id={"deslocamento"}
				initialData={data?.divindade}
				label={"Desloc."}
			/>
			<Attributes />
		</article>
	);
};

export default BasicInfo;
