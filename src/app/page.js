import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";

export default function Home() {
	return (
		<div>
			<SectionHeading type={"sword"} text="Aventureiros" />
			<CharacterList />
			<SectionHeading type={"clips"} text="Recursos Adicionais" />
			<section>
				<a
					href="https://referencet20.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Referência Rápida
				</a>
				<a
					href="https://eduardomarques.pythonanywhere.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Grimório de Magias
				</a>
				<a
					href="https://helladarion-codex.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Ficha de Mostro
				</a>
			</section>
		</div>
	);
}
