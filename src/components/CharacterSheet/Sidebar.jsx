import ProfileImage from "./ProfileImage";

const Sidebar = ({ currentTab, setCurrentTab }) => {
	const tabs = [
		{ id: "geral", label: "Geral" },
		{ id: "attacks", label: "Ataques" },
		{ id: "magias", label: "Magias" },
		{ id: "pericias", label: "Perícias" },
		{ id: "itens", label: "Itens" },
		{ id: "notas", label: "Notas" }
	];

	return (
		// <aside>
		<nav>
			{/* <ProfileImage /> */}
			{tabs.map((tab, index) => (
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
