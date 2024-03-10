import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/Sidebar'
import { ThemeProvider } from '@/provider/ThemeProvider'

type RootLayoutProps = {
	children: React.ReactNode
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Untitled UI',
	description: 'Static website to practice css with Tailwind',
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.className} antialiased`}>
				<ThemeProvider>
					<div className="min-h-screen transition-colors dark:bg-zinc-900 lg:grid lg:grid-cols-app">
						<Sidebar />

						<main className="px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">{children}</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	)
}
