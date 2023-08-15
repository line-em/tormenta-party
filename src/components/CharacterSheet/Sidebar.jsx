import ProfileImage from "./ProfileImage";

const Sidebar = ({ currentTab, setCurrentTab }) => {
	const tabs = [
		{ id: "geral", label: "Geral" },
		{ id: "magias", label: "Ataques & Magias" },
		{ id: "pericias", label: "Perícias" },
		{ id: "equipamento", label: "Itens" },
		{ id: "notas", label: "Notas" }
	];

	return (
		// <aside>
		<nav>
			{/* <ProfileImage /> */}
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
		// </aside>
	);
};

export default Sidebar;
