import DefaultUser from "@/assets/svgs/DefaultUser";
import Circle from "../Circle/Circle";
import Modal from "./Modal";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import { useRef } from "react";

const CharacterModal = ({ hasImg, currentCharacter }) => {
	const ref = useRef(null);
	const onOpen = () => ref.current.showModal();
	const onClose = () => {
		ref.current.className = "close";
		setTimeout(() => {
			ref.current.close();
			ref.current.className = "";
		}, 200); // this value will matching your css animation timing
	};

	return (
		<section className="row">
			<button className="headless" onClick={onOpen}>
				<Circle>
					<DefaultUser width={25} height={25} />
				</Circle>
				<h3>{currentCharacter.charName}</h3>
			</button>
			<Modal ref={ref} onClose={onClose}>
				<CharacterSheet data={currentCharacter || "Anisha Tariq"} />
			</Modal>
		</section>
	);
};

export default CharacterModal;
