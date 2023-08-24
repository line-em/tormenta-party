"use client";
import React from "react";
import { useState, useEffect } from "react";

import { getCollection } from "@/firebase/firestore/getData";
import { addData } from "@/firebase/firestore/addData";
// import { useAuthContext } from "@/context/AuthContext";
import { useFirestore, useSigninCheck, useFirestoreCollectionData } from 'reactfire';

import Plus from "@/assets/svgs/Plus";
import CharacterButton from "@/components/Modal/CharacterButton";
import CircleAndTextButton from "./Circle/CircleAndTextButton";
import Loading from "@/app/loading";

const CharacterList = () => {
	const [charList, setCharList] = useState([]);
	const firestore = useFirestore();
	const { data: signinResult } = useSigninCheck();
	// const { user } = useAuthContext();

	useEffect(() => {
		getCharacterList();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// const getCharacterList = React.cache(async () => {
	// 	const { result, error } = await getCollection("characters");
	// 	let list = result.docs.map((doc) => doc.id);
	// 	error && alert(error.message);
	// 	setCharList(list);
	// });

	const getCharacterList = () => {
		const charsCollection = collection(firestore, 'characters');
		const charssQuery = query(charsCollection, orderBy('charName', 'asc'));
		const { status, data: characters } = useFirestoreCollectionData(charssQuery, {
		  idField: 'id',
		});
		console.log(status)
		console.log(characters)
		// error && alert(error.message);
		// setCharList(list);
	}

	const newCharacter = async () => {
		let newCharName = prompt("Nome do personagem: ");
		if (charList.includes(newCharName)) {
			alert("Personagem já existe!");
			return;
		}
		const { error } = await addData("characters", newCharName, {
			user_uid: signinResult.user.uid,
			charName: newCharName,
			createdAt: new Date()
		});
		error ? alert(error.message) : alert("Personagem criado!");
		window.location.reload();
	};

	return (
		<section className="grid big no-shadow">
			{charList.length == 0 && <Loading />}
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
