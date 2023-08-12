import SectionHeading from "../Headings/SectionHeading";
import styles from "./CharacterSheet.module.css";
import Attributes from "@/components/Attributes/Attributes";
import BasicInfo from "./BasicInfo";
import "@/styles/floating-input.css";
import { useState } from "react";
import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";
import LockButton from "../LockButton/LockButton";
import Pericias from "./Pericias";

export default function CharacterSheet({ character }) {
	const [isLocked, setIsLocked] = useState(true);
	const [currentTab, setCurrentTab] = useState("main");

	return (
		<div className={styles.characterSheet}>
			<aside>
				<Circle
					width={"100%"}
					height={"auto"}
					min-width={"9vw"}
					max-width={"10vw"}
				>
					<Clips width={50} height={50} />
				</Circle>
				<nav>
					<button disabled={currentTab === "main"}>Perfil</button>
					<button>Combate</button>
					<button>Inventário</button>
					<button>Magias</button>
					<button>Notas</button>
				</nav>
			</aside>
			<article className="no-shadow">
				<BasicInfo isLocked={isLocked} />
				<Attributes isLocked={isLocked} />
				<Pericias />
				<footer>
					<LockButton isLocked={isLocked} setIsLocked={setIsLocked} />
					<button>Save</button>
				</footer>
			</article>
		</div>
	);
}
