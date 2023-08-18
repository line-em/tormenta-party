import styles from "./CharacterSheet.module.css";
import "@/styles/floating-input.css";
import "@/styles/checkbox.css";
import Sidebar from "./Sidebar";
import Form from "../Form/Form";

export default function CharacterSheet({ children, data }) {
	return (
		<div className={styles.characterSheet}>
			<Sidebar />
			<Form>{children}</Form>
		</div>
	);
}
