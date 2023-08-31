import CharacterList from "@/components/CharacterList";
import SectionHeading from "@/components/Headings/SectionHeading";

export default function Home() {
	return (
		<section className="align-start">
			<SectionHeading icon={"sword"}>Aventureiros</SectionHeading>
			<CharacterList />
		</section>
	);
}
