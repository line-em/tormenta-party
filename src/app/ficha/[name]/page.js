// "use client";
// import { useState } from "react";
// import { redirect, useParams } from "next/navigation";
// import { getDocOnSnapshot, getDocument } from "@/firebase/firestore/getData";
// import Loading from "@/app/loading";
// import Geral from "@/components/CharacterSheet/Geral/Geral";

// const Page = () => {
// 	const params = useParams();
// 	const decodedCharName = decodeURIComponent(params.name);
// 	const [charSheet, setCharSheet] = useState(null);
// 	const getChar = async function () {
// 		const { result, error } = await getDocument("characters", decodedCharName);
// 		error && alert(error.message);
// 		setCharSheet(result.data());
// 	};

// 	if (charSheet?.charName !== decodedCharName) {
// 		getChar();
// 	}

// 	if (charSheet) {
// 		console.log(decodedCharName);
// 		redirect(`/ficha/${charSheet.charName}/geral`);
// 	}

// 	return <Loading />;
// };

// export default Page;
