import BasicInfo from "./BasicInfo";
import SmallNotes from "./SmallNotes";
import Armor from "./Armor";
import ProfileImage from "./ProfileImage";
import StatusBar from "./StatusBar";

const Geral = ({ data }) => {
	return (
		<>
			<section className={`no-shadow no-padding grid auto-grid`}>
				<section className={`no-shadow no-padding`}>
					<ProfileImage hasImage={true} />
					<section
						className={`no-shadow no-padding grid will-wrap`}
						style={{ width: "88%" }}
					>
						<StatusBar type={"PV"} />
						<StatusBar type={"PM"} />
					</section>
				</section>
				<BasicInfo data={data} />
			</section>

			<section className="grid no-shadow no-padding">
				<Armor />
				<SmallNotes />
			</section>
		</>
	);
};

export default Geral;
