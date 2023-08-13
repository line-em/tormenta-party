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
				type="text"
			/>
			<Input
				id="raca"
				label={"Raça"}
				initialData={data?.raca}
				disabled={isLocked}
				type="text"
				inputCss="big"
			/>
			<Input
				id={"origem"}
				initialData={data?.origem}
				label={"Origem"}
				disabled={isLocked}
				type="text"
			/>
			<Input
				id={"classe"}
				initialData={data?.classes}
				label={"Classe"}
				disabled={isLocked}
				type="text"
			/>
			<Input
				id={"lvl"}
				initialData={data?.level}
				label={"Nível"}
				disabled={isLocked}
				type="number"
			/>
			<Input
				id={"religiao"}
				initialData={data?.divindade}
				label={"Religião"}
				disabled={isLocked}
				type="text"
			/>
		</article>
	);
};

export default BasicInfo;
