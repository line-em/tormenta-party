import React from "react";
import styles from "./Pericias.module.css";

const ViewMode = ({ pericias, attributes, levelBonus, db }) => {
	const getTotal = (attr, trained) => {
		return Number(attr) + Number(levelBonus) + (trained ? 2 : 0);
	};
	// FIXME: Falta Outros aqui em cima, logica para menos e mais.
	return (
		<>
			{Object.keys(pericias).map((item) => (
				<React.Fragment key={item}>
					<li>{item}</li>
					<li>
						<strong>
							{getTotal(
								attributes[pericias[item]],
								db && db[item]?.trained
							)}
						</strong>{" "}
						<sup style={{ fontSize: "var(--small)", opacity: 0.5 }}>
							{levelBonus} + {attributes[pericias[item]]}
							{db && db[item]?.trained && "+ 2"}
							{db && db[item]?.other && db[item]?.other}
						</sup>
					</li>
				</React.Fragment>
			))}
		</>
	);
};

export default ViewMode;
