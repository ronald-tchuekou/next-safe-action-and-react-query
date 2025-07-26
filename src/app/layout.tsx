import '@/styles/style.css'
import type { Metadata } from 'next'

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
			<body className={`antialiased`}>{children}</body>
		</html>
	)
}
