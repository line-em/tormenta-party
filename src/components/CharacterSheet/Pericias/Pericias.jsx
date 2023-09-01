"use client";
import { pericias, periciasCols } from "@/data/pericias";
import { useState } from "react";
import styles from "./Pericias.module.css";
import React from "react";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import Eye from "@/assets/svgs/Eye";
import Quill from "@/assets/svgs/Quill";
import useDataStore from "@/store/useDataStore";
import { useFormContext } from "react-hook-form";

const Pericias = () => {
	const { currentChar } = useDataStore();
	const { getValues } = useFormContext();
	const halfLevel =
		Math.floor(Number(currentChar?.level) / 2) > 1
			? Math.floor(Number(currentChar?.level) / 2)
			: 0;
	const [editMode, setEditMode] = useState(false);
	const handleEditMode = async (e) => {
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
		setEditMode(!editMode);
	};

	return (
		<>
			<button onClick={(e) => handleEditMode(e)} className="fit center secondary">
				{editMode ? "Visualizar" : "Editar"}
				{editMode ? (
					<Eye width={19} height={19} style={{ marginTop: 1 }} />
				) : (
					<Quill width={17} height={17} />
				)}
			</button>
			<ul
				className={`no-shadow no-padding ${styles.list} ${
					!editMode && styles.viewList
				}`}
			>
				{editMode ? (
					<EditMode
						periciasCols={periciasCols}
						pericias={pericias}
						levelBonus={halfLevel}
						attributes={getValues("attributes")}
						db={getValues("pericias")}
						// attributes={currentChar?.attributes}
						// db={currentChar?.pericias}
					/>
				) : (
					<ViewMode
						pericias={pericias}
						levelBonus={halfLevel}
						attributes={getValues("attributes")}
						db={getValues("pericias")}
						// attributes={currentChar?.attributes}
						// db={currentChar?.pericias}
					/>
				)}
			</ul>
		</>
	);
};

export default Pericias;
