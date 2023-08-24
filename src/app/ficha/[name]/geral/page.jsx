"use client";
import Geral from "@/components/CharacterSheet/Geral/Geral";
import useDataStore from "@/store/useDataStore";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
	// const { getCharacter } = useDataStore();
	let currentChar;
	// const params = useParams();
	// const decodedCharName = decodeURIComponent(params.name);
	// console.log(decodedCharName);

	// useEffect(() => {
	// 	currentChar = getCharacter(decodedCharName);
	// 	console.log(currentChar);
	// }, []);

	return <Geral data={currentChar} />;
}
