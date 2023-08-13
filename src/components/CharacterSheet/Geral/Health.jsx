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
				<Life opacity={0.7} width={50} height={50} />

				<div className={styles.progress}>
					<div
						className={styles.progressBar}
						style={{ width: `${getPercent(health.current, health.total)}%` }}
					></div>
				</div>
				<section className="no-shadow no-padding grid">
					<Input
						inputCss={""}
						id={"PV Total"}
						label={"Total"}
						disabled={isLocked}
						onChange={(e) => setHealth(e.target.value)}
					/>
					<Input
						inputCss={""}
						id={"PV Atual"}
						label={"Atual"}
						disabled={isLocked}
						onChange={(e) => setCurrHealth(e.target.value)}
					/>
				</section>
			</article>
			<article className={styles.info}>
				<Mana opacity={0.7} width={50} height={50} />
				<div className={styles.progress}>
					<div
						className={`${styles.progressBar} ${styles.mana}`}
						style={{ width: `${getPercent(mana.current, mana.total)}%` }}
					></div>
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
