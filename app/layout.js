import { Inter } from "next/font/google"
import Head from "next/head"
import Providers from "./Providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
	title: "Pocket Book",
	description:
		"Pocket Book is a versatile, platform-independent eBook reader designed to provide a seamless reading experience across all your devices. As a web app, Pocket Book ensures that you can access your favorite books anytime, anywhere, without being tied to a specific operating system or device.",
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<body className={`${inter.variable}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
