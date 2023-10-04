import "@/styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import  Navbar  from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import FooterUI from '../components/Footer/FooterUI'



export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>

			<head>
			<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
			<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>

			</head>

			<body>
				<Providers>
					<Navbar/>
						{children}
					<FooterUI/>
				</Providers>
			</body>

		</html>
	);
}