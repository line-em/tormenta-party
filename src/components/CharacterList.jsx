"use client";
import React from "react";
import { useState, useEffect } from "react";
import { addData } from "@/firebase/firestore/addData";
import { useAuthContext } from "@/context/AuthContext";
import Plus from "@/assets/svgs/Plus";
import CircleAndTextButton from "./Circle/CircleAndTextButton";
import DefaultUser from "@/assets/svgs/DefaultUser";
import useDataStore from "@/store/useDataStore";
import { usePathname } from "next/navigation";

const CharacterList = ({ menu = false }) => {
	const { charNames, currentChar } = useDataStore();
	const page = usePathname();

	const newCharacter = async () => {
		let newCharName = prompt("Nome do seu personagem: ");
		if (charNames?.includes(newCharName)) {
			alert("Usuário já existe!");
			return;
		}
		if (!newCharName) {
			alert("Preencha todos os campos!");
			return;
		}
		const { error } = await addData("characters", newCharName, {
			charName: newCharName,
			createdAt: new Date()
		});
		error ? alert(error.message) : alert("Personagem criado!");
		window.location.reload();
	};

	const getTargetPage = (character) => {
		const pathParts = page.split("/");
		if (pathParts.includes("magic")) return `/ficha/${character}/geral`;
		if (pathParts.includes("attacks")) return `/ficha/${character}/attacks`;
		if (pathParts.includes("itens")) return `/ficha/${character}/itens`;
		if (pathParts.includes("skills")) return `/ficha/${character}/skills`;
		if (pathParts.includes("notes")) return `/ficha/${character}/notes`;
		if (pathParts.includes("powers")) return `/ficha/${character}/powers`;
		else return `/ficha/${character}/geral`;
	};

	return (
		// FIXME: ask fro the username/player name, and use that as reference instead of charname.
		<section className={`grid big no-shadow ${menu && "place-center"}`}>
			{charNames.map((character) => (
				<section
					className={`row ${menu && "no-padding no-shadow"}`}
					key={character}
				>
					<CircleAndTextButton
						href={getTargetPage(character)}
						icon={<DefaultUser width={25} height={25} />}
						asLink
						hasImage
						style={{
							opacity: currentChar?.charName === character ? 0.5 : 1
						}}
					>
						{character}
					</CircleAndTextButton>
				</section>
			))}
			{charNames.length < 4 && (
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
