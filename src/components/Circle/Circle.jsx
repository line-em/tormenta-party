import styles from "./Circle.module.css";

const Circle = ({ children, css }) => {
	return <div className={`${styles.addCircle} ${css}`}>{children}</div>;
};

export default Circle;
