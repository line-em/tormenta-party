import { pericias } from "@/data/pericias";
import styles from "./Pericias.module.css";

const Pericias = () => {
	return (
		<ul className={styles.list}>
			{/* <SectionHeading icon="scroll" small>
                    Perícias
                </SectionHeading> */}
			{/* <h2>Perícias</h2> */}
			{pericias.map((item) => (
				<li>
					<strong>{item.skill}</strong>
					<input
						type="checkbox"
						name={item.skill}
						id={item.skill}
						checked={item.trained}
					/>
				</li>
			))}
		</ul>
	);
};

export default Pericias;
