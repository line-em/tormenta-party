import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";

const Sidebar = ({ currentTab }) => {
	return (
		<aside>
			<Circle width={"100%"} height={"auto"} min-width={"9vw"} max-width={"10vw"}>
				<Clips width={50} height={50} />
			</Circle>
			<nav>
				<button disabled={currentTab === "main"}>Geral</button>
				<button>Perícias</button>
				<button>Equipamento</button>
				<button>Magias</button>
				<button>Notas</button>
			</nav>
		</aside>
	);
};

export default Sidebar;
