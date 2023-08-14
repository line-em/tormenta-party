"use client";
import { useRef, useState, useEffect } from "react";
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { getDocument, getCollection } from "@/firebase/firestore/getData";
import { addData } from "@/firebase/firestore/addData";

import Plus from "@/assets/svgs/Plus";
import CharacterModal from "@/components/Modal/CharacterModal";
import CircleAndTextButton from "./Circle/CircleAndTextButton";

const CharacterList = () => {
	const [charList, setCharList] = useState([]);
	// const [character, setCharacter] = useState({});

	const { user } = useAuthContext();
	const router = useRouter();

	useEffect(() => {
		user
			? getCharacterList()
			: alert("You need to be logged in to see the characters");
	}, [user]);

	const getCharacter = async (name) => {
		const { result, error } = await getDocument("characters", name);
		console.log(result.data());
		error && alert(error.message);
		// setCharacter(result.data());
	};

	const getCharacterList = async () => {
		const { result, error } = await getCollection("characters");
		let list = result.docs.map((data) => {
			return {
				...data.data()
			};
		});
		// console.log(list);
		error && alert(error.message);
		setCharList(list);
	};

	const updateCharacter = async (name, data) => {
		const { error } = await addData("characters", name, {
			...data,
			user_uid: user.uid || "not loged",
			charName: name
		});
		error ? alert(error.message) : alert("Character created");
	};

	return (
		<section className="grid big">
			{charList.map((character) => (
				<CharacterModal key={character.charName} currentCharacter={character} />
			))}
			{charList.length < 6 && (
				<section className="row">
					<CircleAndTextButton
						func={() => console.log("click")}
						icon={<Plus width={30} height={30} />}
					>
						Criar
					</CircleAndTextButton>
				</section>
			)}
		</section>
	);
};

export default CharacterList;
