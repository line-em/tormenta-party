import Input from "../../Form/Input";
import Form from "@/components/Form/Form";

const BasicInfo = ({ isLocked, data }) => {
	return (
		<Form>
			<Input
				rowCss="span3"
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
				value={data?.raca}
				disabled={isLocked}
				type="text"
				inputCss="big"
			/>
			<Input
				id="origem"
				label={"Origem"}
				value={data?.origem}
				disabled={isLocked}
				type="text"
			/>
			<Input id={"classe"} label={"Classe"} disabled={isLocked} type="text" />
			<Input id={"lvl"} label={"Nível"} disabled={isLocked} type="number" />
			<Input id={"religiao"} label={"Religião"} disabled={isLocked} type="text" />
		</Form>
	);
};

export default BasicInfo;
