import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";
import ImageCircle from "../Circle/ImageCircle";

const ProfileImage = ({ hasImage }) => {
	const getRandomChar = () => {
		const types = ["Test new char", "Layla Mahila", "Test", "Howking Khan"];
		const type = types[Math.floor(Math.random() * types.length)];
		return type;
	};
	// FIXME: Use proper images
	return (
		<Circle hasImage>
			{hasImage ? (
				<ImageCircle type={getRandomChar()} width={200} height={200} />
			) : (
				<Clips width={40} height={40} />
			)}
		</Circle>
	);
};

export default ProfileImage;
