import Mana from "@/assets/svgs/Mana";
import Life from "@/assets/svgs/Life";
import Input from "@/components/Form/Input";
import styles from "./Health.module.css";
import { useState } from "react";
import { getPercent } from "@/app/utils";

const Health = ({ isLocked }) => {
	const [health, setHealth] = useState({ total: 80, current: 75 });
	const [mana, setMana] = useState({ total: 80, current: 75 });

	return (
		<section className="no-shadow no-padding grid">
			<article className={styles.info}>
				<div className={styles.modify}>
					<div className={styles.modifyValues}>
						<p>-1</p>
						<p>-5</p>
					</div>
					<Life opacity={0.7} width={55} height={55} />
					<div className={styles.modifyValues}>
						<p>+1</p>
						<p>+5</p>
					</div>
				</div>

				<div className={styles.progress}>
					<div
						className={styles.progressBar}
						style={{ width: `${getPercent(health.current, health.total)}%` }}
					></div>
				</div>
				<p style={{ fontSize: "var(--small)" }}>
					<strong>{health.current}</strong> /{" "}
					<span style={{ color: "var(--grey)" }}>{health.total}</span>
				</p>
			</article>
			<article className={styles.info}>
				<div className={styles.modify}>
					<div className={styles.modifyValues}>
						<p>-1</p>
						<p>-5</p>
					</div>
					<Mana opacity={0.7} width={55} height={55} />
					<div className={styles.modifyValues}>
						<p>+1</p>
						<p>+5</p>
					</div>
				</div>
				<div className={styles.progress}>
					<div
						className={`${styles.progressBar} ${styles.mana}`}
						style={{ width: `${getPercent(mana.current, mana.total)}%` }}
					></div>
				</div>
				<p style={{ fontSize: "var(--small)" }}>
					<strong>{health.current}</strong> /{" "}
					<span style={{ color: "var(--grey)" }}>{health.total}</span>
				</p>
			</article>
		</section>
	);
};

export default Health;

/* <Input
						inputCss={""}
						id={"PV Total"}
						label={"Total"}
						disabled={isLocked}
						onChange={(e) => setHealth({ ...health, total: e.target.value })}
					/>
					<Input
						inputCss={""}
						id={"PV Atual"}
						label={"Atual"}
						disabled={isLocked}
						onChange={(e) =>
							setHealth({ ...health, current: e.target.value })
						}
					/> */
