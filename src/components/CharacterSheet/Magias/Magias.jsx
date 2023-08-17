import React from "react";
import { magias } from "@/data/magias";
import { useMiniSearch } from "react-minisearch";
import SectionHeading from "@/components/Headings/SectionHeading";

const miniSearchOptions = {
	fields: ["nome", "descricao"]
};

const Magias = () => {
	const searchSpells = magias.flatMap((spell) =>
		Object.keys(spell).map((nome, i) => ({
			id: nome.replace(/ /g, "_").toLowerCase(),
			nome
		}))
	);

	const { search, searchResults } = useMiniSearch(searchSpells, miniSearchOptions);

	const handleSearch = (e) => {
		const { value } = e.target;
		search(value, {
			prefix: (term) => term.length > 1,
			fuzzy: (term) => (term.length > 3 ? 0.2 : null),
			boost: { title: 2 }
		});
		console.log(searchResults);
	};

	return (
		<>
			<SectionHeading icon="spells" small>
				Magias
			</SectionHeading>

			<input type="text" onChange={handleSearch} placeholder="Search…" />

			<ol>
				{searchResults &&
					searchResults.map((result, i) => {
						return <li key={i}>{result.nome}</li>;
					})}
			</ol>
		</>
	);
};

export default Magias;
