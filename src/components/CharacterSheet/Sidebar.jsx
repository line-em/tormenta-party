"use client";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
	const pathname = usePathname();
	const params = useParams();
	const tabs = [
		{ id: `/ficha/${params.name}/geral`, label: "Geral" },
		{ id: `/ficha/${params.name}/attacks`, label: "Ataques" },
		{ id: `/ficha/${params.name}/magic`, label: "Magias" },
		{ id: `/ficha/${params.name}/powers`, label: "Poderes" },
		{ id: `/ficha/${params.name}/skills`, label: "Perícias" },
		{ id: `/ficha/${params.name}/itens`, label: "Itens" },
		{ id: `/ficha/${params.name}/notes`, label: "Notas" }
	];
	return (
		<nav>
			{tabs.map((tab) => (
				<Link
					href={tab.id}
					key={tab.id}
					prefetch={true}
					className={
						pathname === tab.id
							? "link-button smaller-padding active"
							: "link-button smaller-padding secondary"
					}
					aria-disabled={pathname === tab.id}
				>
					{tab.label}
				</Link>
			))}
		</nav>
	);
};

export default Sidebar;
