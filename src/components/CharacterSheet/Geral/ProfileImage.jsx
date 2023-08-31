import Circle from "@/components/Circle/Circle";
import Clips from "@/assets/svgs/Clips";
import ImageCircle from "../../Circle/ImageCircle";
import useDataStore from "@/store/useDataStore";

const ProfileImage = ({ hasImage }) => {
	const { currentChar } = useDataStore();
	return (
		<Circle hasImage>
			{hasImage ? (
				<ImageCircle type={currentChar?.charName} />
			) : (
				<Clips width={40} height={40} />
			)}
		</Circle>
	);
};

export default ProfileImage;
