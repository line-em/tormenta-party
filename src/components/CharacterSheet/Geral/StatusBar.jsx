"use client";
import Mana from "@/assets/svgs/Mana";
import Life from "@/assets/svgs/Life";
import styles from "./StatusBar.module.css";
import { useState } from "react";
import { getPercent, updateStatus } from "@/app/utils";
import ModifierButton from "@/components/ModifierButton.tsx";
import { useFormContext } from "react-hook-form";
import useDataStore from "@/store/useDataStore";

const StatusBar = ({ type, data }) => {
	const { currentChar } = useDataStore();
	const { setValue } = useFormContext();
	const [category, setCategory] = useState("current");
	const [status, setStatus] = useState({
		PV: {
			total: currentChar?.status?.PV?.total || 0,
			current: currentChar?.status?.PV?.current || 0
		},
		PM: {
			total: currentChar?.status?.PM?.total || 0,
			current: currentChar?.status?.PM?.current || 0
		}
	});

	const { current, total } = status[type];

	const icon = {
		PM: <Mana opacity={0.7} width={55} height={55} />,
		PV: <Life opacity={0.7} width={55} height={55} />
	};

	const handleStatus = ({ newValue, action }, e) => {
		const updatedStatus = updateStatus(status, type, category, newValue, action);
		setStatus(updatedStatus);
		setValue("status", { ...status, ...updatedStatus });
		if (e) {
			e.preventDefault && e.preventDefault();
			e.persist && e.persist();
		}
	};

	const renderValue = (value, tab) => {
		const isSelected = category === tab;
		const style = {
			color: isSelected
				? type === "PM"
					? "var(--purple)"
					: "var(--red)"
				: "var(--warm-grey)",
			cursor: isSelected ? "default" : "pointer"
		};
		const Element = isSelected ? "strong" : "span";

		return (
			<Element onClick={() => !isSelected && setCategory(tab)} style={style}>
				{value}
			</Element>
		);
	};

	return (
		<article className={styles.info}>
			<div className={styles.modify}>
				<ModifierButton
					type={"remove"}
					func={(e) => handleStatus({ newValue: 1, action: "decrease" }, e)}
				/>
				{icon[type]}
				<ModifierButton
					type={"add"}
					func={(e) => handleStatus({ newValue: 1, action: "increase" }, e)}
				/>
			</div>
			<div className={styles.progress}>
				<div
					className={`${styles.progressBar} ${type === "PM" && styles.mana}  ${
						current > total && styles.bonus
					}`}
					style={{ width: `${getPercent(current, total)}%` }}
				></div>
			</div>
			<p>
				{renderValue(current, "current")} / {renderValue(total, "total")}
			</p>
		</article>
	);
};

export default StatusBar;
