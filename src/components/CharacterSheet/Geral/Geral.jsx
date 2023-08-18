"use client";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import SmallNotes from "./SmallNotes";
import Armor from "./Armor";
import ProfileImage from "../ProfileImage";
import StatusBar from "./StatusBar";

const Geral = ({ data }) => {
	return (
		<>
			<section className={`no-shadow no-padding grid auto-grid`}>
				<section className={`no-shadow no-padding`}>
					<ProfileImage />
					<section
						className={`no-shadow no-padding grid`}
						style={{ width: "90%" }}
					>
						<StatusBar type={"PV"} />
						<StatusBar type={"PM"} />
					</section>
				</section>
				<BasicInfo data={data} />
			</section>
			<Attributes />

			<section className="grid no-shadow no-padding">
				<Armor />
				<SmallNotes />
			</section>
		</>
	);
};

export default Geral;
