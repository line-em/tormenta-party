import styles from "./Circle.module.css";

const Circle = ({ children, hasImage, ...props }) => {
	return (
		<div
			className={`${styles.addCircle} ${hasImage ? styles.imgWrapper : ""}`}
			style={{ ...props }}
		>
			{children}
		</div>
	);
};

export default Circle;
