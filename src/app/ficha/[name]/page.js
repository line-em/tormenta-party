import CharacterSheet from "@/components/CharacterSheet/CharacterSheet";
import React from "react";

const Page = ({ params }) => {
	return <CharacterSheet character={{ name: params.name }} />;
};

export default Page;

export async function generateStaticParams() {
	const characters = ["anisha", "howkin"];
	return characters.map((character) => ({
		slug: characters.slug
	}));
}
