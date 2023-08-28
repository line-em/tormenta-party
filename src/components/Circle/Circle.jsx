import styles from "./Circle.module.css";

const Circle = ({ children, css, hasImage, ...props }) => {
	return (
		<div
			className={`${styles.addCircle} ${css && css} ${
				hasImage ? styles.imgWrapper : ""
			}`}
			style={{ ...props }}
		>
			{children}
		</div>
	);
};

export default Circle;
