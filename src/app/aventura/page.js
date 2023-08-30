import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";
import Referencias from "@/components/Referencias";
import Link from "next/link";

export default function Home() {
	return (
		<section className="align-start">
			<SectionHeading icon={"sword"}>Aventureiros</SectionHeading>
			<CharacterList />
			{/* <Link href="/ficha/anisha">xx</Link> */}
			{/* <SectionHeading icon={"clips"}>Recursos Adicionais</SectionHeading>
			<Referencias /> */}
		</section>
	);
}
