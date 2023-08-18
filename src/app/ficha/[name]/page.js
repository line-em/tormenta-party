"use client";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getDocOnSnapshot, getDocument } from "@/firebase/firestore/getData";
import Loading from "@/app/loading";

const Page = () => {
	const params = useParams();
	const decodedCharName = decodeURIComponent(params.name);
	const [charSheet, setCharSheet] = useState(null);

	const getChar = async function () {
		const { result, error } = await getDocument(
			"characters",
			decodedCharName
		);

		error && alert(error.message);
		setCharSheet(result.data());
	}

	if (charSheet?.charName !== decodedCharName) {
		getChar();
	}

	// useEffect(() => {
	// 	const { unsubscribe } = getDocOnSnapshot(
	// 		"characters",
	// 		decodedCharName,
	// 		(result) => {
	// 			let res = result.data();
	// 			setCharSheet(res);
	// 		}
	// 	);

	// 	return () => {() => unsubscribe()}

	// }, []);

	return charSheet ? <CharacterSheet character={charSheet} /> : <Loading />;
};

export default Page;
