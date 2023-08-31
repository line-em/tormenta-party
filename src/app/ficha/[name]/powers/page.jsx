import React from "react";
import { poderesConcedidos } from "@/data/poderes-concedidos";
import { poderesDaTormenta } from "@/data/poderes-da-tormenta";
import { poderesDeClasse } from "@/data/poderes-da-classe";

const page = () => {
	return (
		<div>
			<strong>Poderes Concedidos</strong>
			{Object.keys(poderesConcedidos).map((poder) => (
				<div key={poder}>{poder}</div>
			))}
		</div>
	);
};

export default page;
