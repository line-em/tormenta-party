"use client";
import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { getDocOnSnapshot } from "@/firebase/firestore/getData";
import Loading from "@/app/loading";

const Page = () => {
	const params = useParams();
	const decodedCharName = decodeURIComponent(params.name);
	const [charSheet, setCharSheet] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const { unsubscribe } = getDocOnSnapshot(
			"characters",
			decodedCharName,
			(result) => {
				let res = result.data();
				setTimeout(() => {
					setCharSheet(res);
					setLoading(false);
				}, 300); // Adjust the delay time as needed
			}
		);

		return () => () => {
			unsubscribe();
		};
	}, [decodedCharName]);

	if (loading) {
		return <Loading />;
	}

	return charSheet ? <CharacterSheet character={charSheet} /> : <Loading />;
};

export default Page;
