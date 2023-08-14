import Plus from "@/assets/svgs/Plus.jsx";
import Minus from "@/assets/svgs/Minus.jsx";
import React from "react";

type ModifierButtonType = "add" | "remove";

interface ModifierButtonProps {
	type: ModifierButtonType;
	func: () => void;
}

const ModifierButton: React.FC<ModifierButtonProps> = ({ type, func }) => {
	return (
		<button className={`secondary`} onClick={func} style={{ padding: "3px 3px 4px" }}>
			{type === "add" && <Plus />}
			{type === "remove" && <Minus />}
		</button>
	);
};

export default ModifierButton;
