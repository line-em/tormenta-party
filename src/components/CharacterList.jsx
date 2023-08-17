"use client";
import React from "react";
import { useState, useEffect } from "react";

import { getCollection } from "@/firebase/firestore/getData";
import { addData } from "@/firebase/firestore/addData";
import { useAuthContext } from "@/context/AuthContext";

import Plus from "@/assets/svgs/Plus";
import CharacterButton from "@/components/Modal/CharacterButton";
import CircleAndTextButton from "./Circle/CircleAndTextButton";

const CharacterList = () => {
	const [charList, setCharList] = useState([]);
	const { user } = useAuthContext();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		getCharacterList();
	}, []);

	const getCharacterList = React.cache(async () => {
		const { result, error } = await getCollection("characters");
		let list = result.docs.map((doc) => doc.id);
		error && alert(error.message);
		setCharList(list);
	});

	const newCharacter = async () => {
		let newCharName = prompt("Nome do personagem: ");
		const { error } = await addData("characters", newCharName, {
			user_uid: user.uid,
			charName: newCharName,
			createdAt: new Date()
		});
		error ? alert(error.message) : alert("Personagem criado!");
		window.location.reload();
	};

	return (
		<section className="grid big no-shadow">
			{charList.map((character) => (
				<CharacterButton key={character} currentCharacter={character} />
			))}
			{charList.length < 6 && (
				<section className="row">
					<CircleAndTextButton
						func={() => newCharacter()}
						icon={<Plus width={30} height={30} />}
					>
						Novo
					</CircleAndTextButton>
				</section>
			)}
		</section>
	);
};

export default CharacterList;
