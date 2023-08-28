"use client";
import Geral from "@/components/CharacterSheet/Geral/Geral";
import useDataStore from "@/store/useDataStore";
import { useParams } from "next/navigation";

export default function Page() {
	const { charData } = useDataStore();
	const params = useParams();
	const decodedCharName = decodeURIComponent(params.name);

	return <Geral data={charData[decodedCharName]} />;
}
