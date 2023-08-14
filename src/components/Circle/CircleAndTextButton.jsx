import Circle from "./Circle";

const CircleAndTextButton = ({ func, icon, children }) => {
	return (
		<button className="headless" onClick={func}>
			<Circle>{icon}</Circle>
			<h3>{children}</h3>
		</button>
	);
};

export default CircleAndTextButton;
