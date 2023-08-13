import Circle from "../Circle/Circle";
import Clips from "@/assets/svgs/Clips";

const Sidebar = ({ currentTab }) => {
	return (
		<aside>
			<Circle width={"100%"} height={"auto"} min-width={"9vw"} max-width={"10vw"}>
				<Clips width={50} height={50} />
			</Circle>
			<nav>
				<button disabled={currentTab === "main"} className="secondary">
					Geral
				</button>
				<button className="secondary">Perícias</button>
				<button className="secondary">Equipamento</button>
				<button className="secondary">Magias</button>
				<button className="secondary">Notas</button>
			</nav>
		</aside>
	);
};

export default Sidebar;
