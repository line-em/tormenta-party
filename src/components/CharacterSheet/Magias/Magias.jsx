"use client";
import { magias } from "@/data/magias";
import { useState } from "react";
import { useMiniSearch } from "react-minisearch";
import SectionHeading from "@/components/Headings/SectionHeading";
import ModifierButton from "@/components/ModifierButton";

const miniSearchOptions = {
	fields: ["nome", "descricao"]
};

const Magias = () => {
	const [selectedItems, setSelectedItems] = useState([]);

	const spellNames = Object.keys(magias).map((nome, i) => ({
		id: nome.replace(/ /g, "_").toLowerCase(),
		...magias[nome]
	}));
	console.log(spellNames);

	const { search, searchResults } = useMiniSearch(spellNames, miniSearchOptions);

	const handleAddItem = (item) => {
		setSelectedItems((prevItems) => [...prevItems, item]);
		console.log(selectedItems);
	};

	const handleSearch = (e) => {
		const { value } = e.target;
		search(value, {
			prefix: (term) => term.length > 1,
			fuzzy: (term) => (term.length > 3 ? 0.2 : null),
			boost: { title: 2 }
		});
		// console.log(searchResults);
	};

	return (
		<>
			<SectionHeading icon="spells" small>
				Meu Grimório
			</SectionHeading>
			<ul>
				{selectedItems.length > 0 ? (
					selectedItems.map((item, i) => <li key={i}>{item.nome}</li>)
				) : (
					<p>Não tem magias.</p>
				)}
			</ul>

			<SectionHeading icon="spells" small>
				Magias
			</SectionHeading>

			<input
				type="text"
				onChange={handleSearch}
				placeholder="Pesquisar magias..."
			/>

			<ol className="section-style grid no-padding no-shadow">
				{searchResults &&
					searchResults.map((result, i) => {
						return (
							<li
								key={i}
								className="section-style no-padding no-shadow row align-start"
							>
								<strong>{result.nome}</strong>
								<ModifierButton
									func={(e) => handleAddItem(result)}
									type="add"
								/>
							</li>
						);
					})}
			</ol>
		</>
	);
};

export default Magias;
