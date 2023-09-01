import React from "react";
import styles from "./Pericias.module.css";

const ViewMode = ({ pericias, attributes, levelBonus, db }) => {
	const getTotal = (attr, trained) => {
		return Number(attr) + Number(levelBonus) + (trained ? 2 : 0);
	};
	const getAttr = (item) => {
		return db ? attributes[db[item]?.attr] : attributes[pericias[item]];
	};
	return (
		<>
			{Object.keys(pericias).map((item) => (
				<React.Fragment key={item}>
					<li>{item}</li>
					<li>
						<strong>
							{getTotal(getAttr(item), db && db[item]?.trained)}
						</strong>{" "}
						<sup style={{ fontSize: "var(--small)", opacity: 0.5 }}>
							({levelBonus} + {getAttr(item)}
							{db && db[item]?.trained && "+ 2"}
							{db && db[item]?.other && db[item]?.other})
						</sup>
					</li>
				</React.Fragment>
			))}
		</>
	);
};

export default ViewMode;
