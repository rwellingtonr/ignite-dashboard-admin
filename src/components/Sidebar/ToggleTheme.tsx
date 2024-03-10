'use client'

import { useTheme } from 'next-themes'
import { Button } from '../Button'
import { Icon } from '../Icon'

export function ToggleTheme() {
	const { theme, setTheme } = useTheme()

	const handleSetTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<Button variant="ghost" onClick={handleSetTheme}>
			<Icon name="SunMoon" className="h-6 w-6" />
		</Button>
	)
}
