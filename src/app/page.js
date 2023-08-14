import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import TitleHeading from "@/components/Headings/TitleHeading";
import Link from "next/link";

export default function Home() {
	return (
		<main className="center-align">
			<TitleHeading>A ameaça purista</TitleHeading>
			<div>
				<SectionHeading icon={"sword"}>Aventureiros</SectionHeading>
				<CharacterList />
				{/* <Link href="/ficha/anisha">xx</Link> */}
				<SectionHeading icon={"clips"}>Recursos Adicionais</SectionHeading>
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
		</main>
	);
}
