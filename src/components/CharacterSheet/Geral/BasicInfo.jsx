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
			<Input id={"origem"} initialData={data.origem} label={"Origem"} disabled={isLocked} type="text" />
			<Input id={"classe"} initialData={data.classes} label={"Classe"} disabled={isLocked} type="text" />
			<Input id={"lvl"} initialData={data.level} label={"Nível"} disabled={isLocked} type="number" />
			<Input id={"religiao"} initialData={data.divindade} label={"Religião"} disabled={isLocked} type="text" />
		</Form>
	);
};

export default BasicInfo;
