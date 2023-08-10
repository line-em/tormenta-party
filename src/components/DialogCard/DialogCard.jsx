import DefaultUser from "@/assets/svgs/DefaultUser";
import Plus from "@/assets/svgs/Plus";
import styles from "./DialogCard.module.css";
import Circle from "../Circle/Circle";
const DialogCard = ({ isCreated, hasImg, currentCharacter }) => {
	return (
		<section className="row">
			{isCreated ? (
				<button className={styles.transparentButton}>
					<Circle>
						<DefaultUser width={25} height={25} />
					</Circle>
					<h3>{currentCharacter}</h3>
				</button>
			) : (
				<button className={styles.transparentButton}>
					<Circle>
						<Plus width={30} height={30} />
					</Circle>
				</button>
			)}
		</section>
	);
};

export default DialogCard;
