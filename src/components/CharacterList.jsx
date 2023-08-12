"use client";
import OpenModal from "@/components/Modal/OpenModal";
import { useState, useRef } from "react";
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
			<OpenModal isCreated currentCharacter={"Anisha Tariq"} func={onOpen} />
			<OpenModal currentCharacter={"Howkin Khan Howkin"} isCreated />
			<OpenModal />
			<OpenModal />

			<Modal ref={ref} onClose={onClose}>
				<CharacterSheet />
			</Modal>
		</section>
	);
};

export default CharacterList;
