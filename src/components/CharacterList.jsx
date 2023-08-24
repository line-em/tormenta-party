"use client";
import React from "react";
import { useState, useEffect } from "react";

// import { getCollection } from "@/firebase/firestore/getData";
import { addData } from "@/firebase/firestore/addData";
// import { useAuthContext } from "@/context/AuthContext";

import useDataStore from "@/store/useDataStore";
import useAuth from "@/store/useAuth";

import Plus from "@/assets/svgs/Plus";

import CircleAndTextButton from "./Circle/CircleAndTextButton";
import Loading from "@/app/loading";
import DefaultUser from "@/assets/svgs/DefaultUser";

const CharacterList = () => {
	const [charList, setCharList] = useState([]);
	const { uid } = useAuth();
	const { charNames } = useDataStore();

	useEffect(() => {
		setCharList(charNames);
	}, [charNames]);

	const newCharacter = async () => {
		let newCharName = prompt("Nome do personagem: ");
		if (charList?.includes(newCharName)) {
			alert("Personagem já existe!");
			return;
		}
		const { error } = await addData("characters", newCharName, {
			// user_uid: user.uid,
			user_uid: uid + newCharName,
			charName: newCharName,
			createdAt: new Date()
		});
		error ? alert(error.message) : alert("Personagem criado!");
		window.location.reload();
	};

	return (
		// FIXME: Put this on the page component for clarity
		// FIXME: ask fro the username/player name, and use that as reference instead of charname.
		<section className="grid big no-shadow">
			{charList.map((character) => (
				<section className="row">
					<CircleAndTextButton
						href={`/ficha/${character}/geral`}
						asLink
						icon={<DefaultUser width={25} height={25} />}
					>
						{character}
					</CircleAndTextButton>
				</section>
			))}
			{charList.length < 5 && (
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
