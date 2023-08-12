import Lock from "@/assets/svgs/Lock";
import Unlock from "@/assets/svgs/Unlock";
import styles from "./LockButton.module.css";

const LockButton = ({ isLocked }) => {
	return (
		<button className={styles.lockStyle} onClick={() => setIsLocked(!isLocked)}>
			{isLocked ? (
				<Lock width={30} height={30} />
			) : (
				<Unlock width={30} height={30} />
			)}
		</button>
	);
};

export default LockButton;
