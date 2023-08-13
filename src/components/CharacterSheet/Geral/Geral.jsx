import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import SmallNotes from "./SmallNotes";
import Armor from "./Armor";

const Geral = ({ isLocked, data }) => {
	return (
		<>
			<BasicInfo isLocked={isLocked} data={data} />
			<Attributes isLocked={isLocked} />
			<section className="grid no-shadow">
				<Armor width={50} height={50} opacity={0.5} />
				<SmallNotes />
			</section>
		</>
	);
};

export default Geral;
