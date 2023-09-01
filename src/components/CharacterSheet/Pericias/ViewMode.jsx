import React from "react";
import styles from "./Pericias.module.css";

const ViewMode = ({ pericias, attributes, levelBonus, db }) => {
	const getTotal = (attr, treinada, outros = 0) => {
		return Number(attr) + Number(levelBonus) + (treinada ? 2 : 0) + Number(outros);
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
							{getTotal(
								getAttr(item),
								db && db[item]?.treinada,
								db && db[item]?.outros
							)}
						</strong>{" "}
						<sup
							style={{
								fontSize: ".7em",
								opacity: 0.5,
								wordBreak: "break-all",
								maxWidth: "40px",
								marginLeft: "1ch",
								lineHeight: "1em"
								// textAlign: "right"
							}}
						>
							{levelBonus} + {getAttr(item)}
							{db && db[item]?.treinada && " + 2"}
							{db && db[item]?.outros !== 0 && " + " + db[item]?.outros}
						</sup>
					</li>
				</React.Fragment>
			))}
		</>
	);
};

export default ViewMode;
