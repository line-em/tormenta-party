import styles from "./Circle.module.css";

const Circle = ({ children, css, ...props }) => {
	return (
		<div className={`${styles.addCircle} ${css}`} style={{ ...props }}>
			{children}
		</div>
	);
};

export default Circle;
