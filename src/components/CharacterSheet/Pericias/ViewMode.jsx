import React from "react";
import styles from "./Pericias.module.css";

const ViewMode = ({ pericias, attributes, levelBonus }) => {
	const getTotal = (attr) => {
		return Number(attr) + Number(levelBonus);
	};

	return (
		<>
			{Object.keys(pericias).map((item) => (
				<React.Fragment key={item}>
					<li>{item}</li>
					<li>
						<strong>{getTotal(attributes[pericias[item]])}</strong>
					</li>
				</React.Fragment>
			))}
		</>
	);
};

export default ViewMode;
