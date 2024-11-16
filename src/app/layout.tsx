import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Abdul Aziz Portfolio",
	description: "Created by Abdul Aziz using Next JS",
	keywords: ["Abdul Aziz", "Portfolio", "Next JS"],
	authors: [
		{
			name: "Abdul Aziz",
			url: "https://github.com/jhokam",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased custom-scrollbar scroll-smooth">
				<Header />
				{children}
				<Footer />
				<SpeedInsights />
			</body>
		</html>
	);
}
