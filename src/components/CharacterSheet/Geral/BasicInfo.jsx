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
				options={Array.from({ length: 10 }, (_, index) => index + 1)}
			/>
			<Input
				rowCss={styles.span2}
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				inputCss="big"
				disabled={isLocked}
			/>
			<section className={`no-shadow no-padding grid ${styles.span3}`}>
				<StatusBar isLocked={isLocked} type={"PV"} />
				<StatusBar isLocked={isLocked} type={"PM"} />
			</section>
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
				id={"xp"}
				initialData={data?.xp}
				label={"XP"}
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
				initialData={data?.divindade}
				label={"Religião"}
				disabled={isLocked}
			/>
		</article>
	);
};

export default BasicInfo;
