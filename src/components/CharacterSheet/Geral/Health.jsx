import React from "react";
import Mana from "@/assets/svgs/Mana";
import Life from "@/assets/svgs/Life";
import Input from "@/components/Form/Input";
const Health = ({ isLocked }) => {
	return (
		<section className="no-shadow no-padding grid">
			<section className="no-shadow">
				<Life opacity={0.5} width={50} height={50} />
				{/* <Input inputCss={"small"} id={"PV"} label={"PV"} disabled={isLocked} /> */}
				20 / 20
			</section>
			<section className="no-shadow">
				<Mana opacity={0.5} width={50} height={50} /> 20 / 20
			</section>
		</section>
	);
};

export default Health;
