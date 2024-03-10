'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'

type ThemeProviderProps = {
	children: React.ReactNode
}

export const ThemeProvider = (props: ThemeProviderProps) => (
	<NextThemeProvider attribute="class" {...props} />
)
