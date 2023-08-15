import React from "react";
import styles from "./Pericias.module.css";

const ViewMode = ({ pericias, total }) => {
	return (
		<>
			{pericias.map((item, i) => (
				<React.Fragment key={item.skill}>
					<li>{item.skill}</li>
					<li>
						<strong>{total[item.skill]}</strong>
					</li>
				</React.Fragment>
			))}
		</>
	);
};

export default ViewMode;
