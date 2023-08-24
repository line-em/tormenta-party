'use client'
import "../styles/reset.css";
import "../styles/globals.css";
import "../styles/animation.css";
import "../styles/buttons.css";
import localFont from "next/font/local";
import FirebaseProviderWrapper from "@/firebase/config";
import TitleHeading from "@/components/Headings/TitleHeading";

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

const metadata = {
	title: "Aventura Tormenta 20",
	description: "Website para ajudar na nossa campanha!"
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="en"
			className={`${tormentaFont.variable} ${loraFont.variable}`}
		>
			<body suppressHydrationWarning={true}>
				<main className="center-align">
					<TitleHeading>A ameaça purista</TitleHeading>
					<FirebaseProviderWrapper>
						{children}
					</FirebaseProviderWrapper>
				</main>
			</body>
		</html>
	);
}
