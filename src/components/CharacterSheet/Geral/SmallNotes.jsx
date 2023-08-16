import React from "react";
import Textarea from "@/components/Form/Textarea";

const SmallNotes = ({ data, isLocked }) => {
	return (
		<Textarea
			id="notas"
			initialData={data?.smallNotes}
			label={"Notas & Outras Características"}
			disabled={isLocked}
		/>
	);
};

export default SmallNotes;
