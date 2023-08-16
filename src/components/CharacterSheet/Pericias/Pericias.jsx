import { pericias, periciasCols } from "@/data/pericias";
import { useEffect, useState } from "react";
import styles from "./Pericias.module.css";
import React from "react";
import Input from "@/components/Form/Input";
import EditMode from "./EditMode";
import ViewMode from "./ViewMode";
import { calculateModifier } from "@/app/utils";
import Eye from "@/assets/svgs/Eye";
import Quill from "@/assets/svgs/Quill";

const Pericias = ({ data }) => {
	const tempData = {
		lvl: 5,
		FOR: 10,
		CON: 8,
		DES: 8,
		INT: 12,
		SAB: 10,
		CAR: 15
	};

	const halfLevel = Math.floor(tempData.lvl / 2);
	const [treinadas, setTreinadas] = useState({});
	const [outros, setOutros] = useState({});
	const [selectedModifiers, setSelectedModifiers] = useState({});

	const [total, setTotal] = useState({});
	const [editMode, setEditMode] = useState(false);

	const toggleTreinada = (skill, modifier) => {
		setTreinadas((prevTreinadas) => ({
			...prevTreinadas,
			[skill]: !prevTreinadas[skill]
		}));
		updateTotal(skill, modifier);
	};

	const handleModifierChange = (e, skill) => {
		const selectedModifier = e.target.value;
		setSelectedModifiers((prevSelectedModifiers) => ({
			...prevSelectedModifiers,
			[skill]: selectedModifier
		}));
		updateTotal(skill, selectedModifier);
	};

	const handleOutros = (change, skill, modifier) => {
		setOutros((prevOutros) => ({
			...prevOutros,
			[skill]: Number((prevOutros[skill] ?? 0) + change)
		}));
		updateTotal(skill, modifier);
	};

	const updateTotal = (skill, modifier) => {
		setTotal((prevTotal) => ({
			...prevTotal,
			[skill]:
				Number(halfLevel) +
				(treinadas[skill] ? 2 : 0) +
				Number(calculateModifier(tempData[modifier])) +
				(Number(outros[skill]) || 0)
		}));
	};

	useEffect(() => {
		pericias.forEach((item) => {
			updateTotal(
				item.skill,
				selectedModifiers[item.skill] || item.defaultModifier
			);
		});
	}, [total]);

	return (
		<>
			<button
				onClick={() => setEditMode(!editMode)}
				className="fit center secondary"
			>
				{editMode ? "Visualizar" : "Editar"}
				{editMode ? (
					<Eye width={19} height={19} style={{ marginTop: 1 }} />
				) : (
					<Quill width={17} height={17} />
				)}
			</button>
			<ul className={`no-shadow no-padding ${styles.list}`}>
				{editMode ? (
					<EditMode
						pericias={pericias}
						periciasCols={periciasCols}
						treinadas={treinadas}
						outros={outros}
						toggleTreinada={toggleTreinada}
						handleOutros={handleOutros}
						halfLevel={halfLevel}
						tempData={tempData}
						total={total}
						selectedModifiers={selectedModifiers}
						handleModifierChange={handleModifierChange}
					/>
				) : (
					<ViewMode pericias={pericias} total={total} />
				)}
			</ul>
		</>
	);
};

export default Pericias;
