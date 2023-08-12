import React from "react";
import Mana from "@/assets/svgs/Mana";
import Life from "@/assets/svgs/Life";
const Health = () => {
	return (
		<section className="align-start">
			<article className="no-shadow row">
				<Life /> 20 / 20
			</article>
			<Mana />
		</section>
	);
};

export default Health;
