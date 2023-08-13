"use client";
import React from "react";
import Mana from "@/assets/svgs/Mana";
import Life from "@/assets/svgs/Life";
import Input from "@/components/Form/Input";
import styles from "./Health.module.css";
import { useState } from "react";

const Health = ({ isLocked }) => {
	const [health, setHealth] = useState(100);
	const [currHealth, setCurrHealth] = useState(65);

	return (
		<section className="no-shadow no-padding grid">
			<article className={styles.info}>
				<Life opacity={0.7} width={50} height={50} />

				<div className={styles.progress}>
					<div
						className={styles.progressBar}
						style={{ width: `${currHealth - health}%` }}
					></div>
				</div>
				<section className="no-shadow no-padding grid">
					<Input
						inputCss={""}
						id={"PV Total"}
						label={"Total"}
						disabled={isLocked}
						onChange={(e) => setHealth(e.target.value)}
						value={health}
						type={"number"}
					/>
					<Input
						inputCss={""}
						id={"PV Atual"}
						label={"Atual"}
						disabled={isLocked}
						onChange={(e) => setCurrHealth(e.target.value)}
						value={currHealth}
						type={"number"}
					/>
				</section>
			</article>
			<article className={styles.info}>
				<Mana opacity={0.7} width={50} height={50} />
				<div className={styles.progress}>
					<div className={`${styles.progressBar} ${styles.mana}`}></div>
				</div>
				<section className="no-shadow no-padding grid">
					<Input id={"PM Total"} label={"Total"} disabled={isLocked} />
					<Input id={"PM Atual"} label={"Atual"} disabled={isLocked} />
				</section>
			</article>
		</section>
	);
};

export default Health;
