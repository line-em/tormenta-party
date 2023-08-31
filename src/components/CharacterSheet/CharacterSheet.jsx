import styles from "./CharacterSheet.module.css";
import Sidebar from "./Sidebar";
import Form from "../Form/Form";
import "@/styles/floating-input.css";
import "@/styles/checkbox.css";

export default function CharacterSheet({ children }) {
	return (
		<div className={styles.characterSheet}>
			<Sidebar />
			<Form>{children}</Form>
		</div>
	);
}
