import DefaultUser from "@/assets/svgs/DefaultUser";
import Plus from "@/assets/svgs/Plus";
import Circle from "../Circle/Circle";

const OpenCharacterModal = ({ isCreated, hasImg, currentCharacter, func }) => {
	return (
		<section className="row">
			{isCreated ? (
				<button className="headless" onClick={func}>
					<Circle>
						<DefaultUser width={25} height={25} />
					</Circle>
					<h3>{currentCharacter}</h3>
				</button>
			) : (
				// <button className={styles.transparentButton} onClick={func}>
				<button className="headless" onClick={func}>
					<Circle>
						<Plus width={30} height={30} />
					</Circle>
				</button>
			)}
		</section>
	);
};

export default OpenCharacterModal;
