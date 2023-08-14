import React from "react";
import Movement from "@/assets/svgs/Movement";
import Notes from "@/assets/svgs/Notes";
import Textarea from "@/components/Form/Textarea";

const SmallNotes = ({ data, isLocked }) => {
	return (
		<div>
			<Movement width={50} height={50} />
			<Notes width={50} height={50} />
			<Textarea
				id="notas"
				initialData={data?.charName}
				label={"Notas & Outras Características"}
				disabled={isLocked}
			/>
		</div>
	);
};

export default SmallNotes;
