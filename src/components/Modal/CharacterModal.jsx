import DefaultUser from "@/assets/svgs/DefaultUser";
import Modal from "./Modal";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import { useRef } from "react";
import CircleAndTextButton from "../Circle/CircleAndTextButton";

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
			<CircleAndTextButton
				func={onOpen}
				icon={<DefaultUser width={25} height={25} />}
			>
				{currentCharacter.charName}
			</CircleAndTextButton>
			<Modal ref={ref} onClose={onClose}>
				<CharacterSheet data={currentCharacter || "Anisha Tariq"} />
			</Modal>
		</section>
	);
};

export default CharacterModal;
