"use client";
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/buttons.css";
import localFont from "next/font/local";
import TitleHeading from "@/components/Headings/TitleHeading";
import useDataStore from "@/store/useDataStore";
import { useEffect } from "react";

const tormentaFont = localFont({
	src: "../assets/fonts/Tormenta.ttf",
	variable: "--tormenta-font",
	display: "swap"
});

const loraFont = localFont({
	src: [
		{
			path: "../assets/fonts/lora-v32-latin-regular.woff2",
			weight: "400",
			style: "normal"
		},
		{
			path: "../assets/fonts/lora-v32-latin-italic.woff2",
			weight: "400",
			style: "italic"
		},
		{
			path: "../assets/fonts/lora-v32-latin-700.woff2",
			weight: "700",
			style: "normal"
		},
		{
			path: "../assets/fonts/lora-v32-latin-700italic.woff2",
			weight: "700",
			style: "italic"
		}
	],
	variable: "--default-font",
	display: "swap"
});

export default function RootLayout({ children }) {
	const { getCharacterCollection } = useDataStore();

	useEffect(() => {
		getCharacterCollection();
	}, []);

	return (
		<html lang="en" className={`${tormentaFont.variable} ${loraFont.variable}`}>
			<body suppressHydrationWarning={true}>
				<main className="center-align">
					<TitleHeading>A ameaça purista</TitleHeading>
					{children}
				</main>
			</body>
		</html>
	);
}
