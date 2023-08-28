import Image from "next/image";
import layla from "@/assets/profile/Small_Layla2.webp";
import krom from "@/assets/profile/Small_Kroc2.webp";
import kieran from "@/assets/profile/Small_kieran.webp";
import aimon from "@/assets/profile/Small_aimon.webp";

const ImageCircle = ({ type, text = "Character Image", width = 100, height = 100 }) => {
	const getImage = () => {
		switch (type) {
			case "Test new char":
				return layla;
			case "Layla Mahila":
				return krom;
			case "Test":
				return kieran;
			case "Howking Khan":
				return aimon;
		}
	};

	// FIXME: Use proper types

	return <Image src={getImage()} alt={text} width={width} height={height} />;
};

export default ImageCircle;
