import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const Jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title:
		"Sarvaloka Industries | India's Next Generation Industrial Conglomeration",
	description:
		'We are the most beloved people’s company with a promise to seed impacts through fostering innovation and entrepreneurship amongst the youths.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={Jakarta.className}>{children}</body>
		</html>
	)
}
