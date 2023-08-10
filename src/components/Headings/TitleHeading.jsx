import Divider from "@/assets/svgs/Divider";
import React from "react";

const TitleHeading = ({ children }) => {
	return (
		<header>
			<h1 className="tormenta title">{children}</h1>
			<Divider />
		</header>
	);
};

export default TitleHeading;
