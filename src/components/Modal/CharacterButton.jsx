import DefaultUser from "@/assets/svgs/DefaultUser";
import { useRouter } from "next/navigation";
import CircleAndTextButton from "../Circle/CircleAndTextButton";

const CharacterButton = ({ currentCharacter }) => {
	const router = useRouter();
	const goToPage = () => {
		router.push(`/ficha/${currentCharacter}/geral`);
	};

	return (
		<section className="row ">
			<CircleAndTextButton
				func={goToPage}
				icon={<DefaultUser width={25} height={25} />}
			>
				{currentCharacter}
			</CircleAndTextButton>
		</section>
	);
};

export default CharacterButton;
