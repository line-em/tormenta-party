"use client";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getDocOnSnapshot } from "@/firebase/firestore/getData";
import Loading from "@/app/loading";

const Page = () => {
	const params = useParams();
	const decodedCharName = decodeURIComponent(params.name);
	const [charSheet, setCharSheet] = useState(null);

	useEffect(() => {
		const { unsubscribe } = getDocOnSnapshot(
			"characters",
			decodedCharName,
			(result) => {
				let res = result.data();
				setCharSheet(res);
			}
		);
		return () => () => {
			unsubscribe();
		};
	}, [decodedCharName]);

	return charSheet ? <CharacterSheet character={charSheet} /> : <Loading />;
};

export default Page;
