"use client";
import OpenCharacterModal from "@/components/Modal/OpenCharacterModal";
import { useRef, useState, useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getDocument, getCollection } from "@/firebase/firestore/getData";
import Modal from "./Modal/Modal";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";

const CharacterList = () => {
	const [ charList, setCharList ]  = useState([]);
	const [ character, setCharacter ] = useState({});
	
	const ref = useRef(null);
	const onOpen = () => {
		getCharacter();
		ref.current.showModal();
	}
	const { user } = useAuthContext()
    const router = useRouter()

	useEffect(() => {
		user ? getCharacterList() : alert("You need to be logged in to see the characters")
	},[user])

	const onClose = () => {
		ref.current.className = "close";
		setTimeout(() => {
			ref.current.close();
			ref.current.className = "";
		}, 200); // this value will matching your css animation timing
	};

	const getCharacter = async () => {
		const {result, error} = await getDocument(
			"sheets",
			"first_sheet"
		);
		console.log(result.data());
		error && alert(error.message);
		setCharacter(result.data());
	};

	const getCharacterList = async () => {
		const {result, error} = await getCollection('characters');
		let list = result.docs.map((data) => {return data.id})
		console.log({list})
		error && alert(error.message);
		setCharList(list);
	};

	return (
		<section className="grid big">
			<OpenCharacterModal
				isCreated
				currentCharacter={"Anisha Tariq"}
				func={onOpen}
			/>
			<OpenCharacterModal currentCharacter={"Howkin Khan"} isCreated func={onOpen} />
			<OpenCharacterModal />
			<OpenCharacterModal />

			<Modal ref={ref} onClose={onClose}>
				<CharacterSheet character={character || "Anisha Tariq"} />
			</Modal>
		</section>
	);
};

export default CharacterList;
