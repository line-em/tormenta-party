import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import SmallNotes from "./SmallNotes";
import Armor from "./Armor";
import StatusBar from "./StatusBar";

const Geral = ({ isLocked, data }) => {
	return (
		<>
			<Attributes isLocked={isLocked} />
			<BasicInfo isLocked={isLocked} data={data} />
			<section className="no-shadow no-padding grid">
				<StatusBar isLocked={isLocked} type={"PV"} />
				<StatusBar isLocked={isLocked} type={"PM"} />
			</section>
			<section className="grid no-shadow no-padding">
				<Armor />
				<SmallNotes />
			</section>
		</>
	);
};

export default Geral;
