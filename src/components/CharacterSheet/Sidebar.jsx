import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";

const Sidebar = ({ currentTab, setCurrentTab }) => {
	const tabs = [
		{ id: "geral", label: "Geral" },
		{ id: "pericias", label: "Perícias" },
		{ id: "equipamento", label: "Equipamento" },
		{ id: "magias", label: "Magias" },
		{ id: "notas", label: "Notas" }
	];

	return (
		<aside>
			<Circle width={"100%"} height={"auto"} minWidth={"9vw"} maxWidth={"10vw"}>
				<Clips width={50} height={50} />
			</Circle>
			<nav>
				{tabs.map((tab) => (
					<button
						key={crypto.randomUUID()}
						disabled={currentTab === tab.id}
						className="secondary"
						onClick={() => setCurrentTab(tab.id)}
					>
						{tab.label}
					</button>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
