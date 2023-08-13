"use client";
import OpenCharacterModal from "@/components/Modal/OpenCharacterModal";
import { useRef } from "react";
import Modal from "./Modal/Modal";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";

const CharacterList = () => {
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
		<section className="grid big">
			<OpenCharacterModal
				isCreated
				currentCharacter={"Anisha Tariq"}
				func={onOpen}
			/>
			<OpenCharacterModal currentCharacter={"Howkin Khan"} isCreated />
			<OpenCharacterModal />
			<OpenCharacterModal />

			<Modal ref={ref} onClose={onClose}>
				<CharacterSheet character={{ name: "Anisha Tariq" }} />
			</Modal>
		</section>
	);
};

export default CharacterList;
