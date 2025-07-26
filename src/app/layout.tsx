import '@/styles/style.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600'],
	style: 'normal',
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Utilities query hooks',
	description: 'A collection of utilities for querying data',
}

type Props = Readonly<{
	children: React.ReactNode
}>

export default function RootLayout({ children }: Props) {
	return (
		<html lang='en'>
			<body className={`antialiased ${poppins.className}`}>{children}</body>
		</html>
	)
}
