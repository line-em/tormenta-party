import React from "react";
import { default as ArmorIcon } from "@/assets/svgs/Armor";
import Input from "@/components/Form/Input";

const Armor = () => {
	return (
		<article>
			<h3>
				Classe de Armadura
				<ArmorIcon width={50} height={50} />
			</h3>
			<div className="input-group">
				<div className="input-group-text">$</div>
				<Input id="armor" label="Classe de Armadura" />
			</div>
		</article>
	);
};

export default Armor;
