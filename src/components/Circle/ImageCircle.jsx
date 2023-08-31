import Image from "next/image";
import layla from "@/assets/profile/Small_Layla2.webp";
import krom from "@/assets/profile/Small_Kroc2.webp";
import kieran from "@/assets/profile/Small_kieran.webp";
import aimon from "@/assets/profile/Small_aimon.webp";

const ImageCircle = ({ type, text = "Character Image", width = 200, height = 200 }) => {
	const getImage = () => {
		switch (type) {
			case "Khron Arkenath":
				return krom;
			case "Layla Mahila":
				return layla;
			case "Kieran Anfalen ":
				return kieran;
			case "Kieran Anfalen":
				return kieran;
			case "Aimon Fortuna":
				return aimon;
		}
	};

	return <Image src={getImage()} alt={text} width={width} height={height} />;
};

export default ImageCircle;
