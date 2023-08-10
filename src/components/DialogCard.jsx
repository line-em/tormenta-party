import DefaultUser from "@/assets/svgs/DefaultUser";
import Plus from "@/assets/svgs/Plus";
const DialogCard = ({ isCreated, hasImg, currentCharacter }) => {
	return (
		<section className="row">
			{isCreated ? (
				<>
					<button className="add-circle">
						<DefaultUser />
					</button>
					<h3>{currentCharacter}</h3>
				</>
			) : (
				<>
					<button className="add-circle">
						<Plus />
					</button>
					<h3>Adicionar</h3>
				</>
			)}
		</section>
	);
};

export default DialogCard;
