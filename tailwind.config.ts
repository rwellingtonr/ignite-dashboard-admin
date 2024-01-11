import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				app: 'minmax(18rem, 20rem) 1fr',
				form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
			},
			borderWidth: {
				6: '6px',
			},
			colors: {
				violet: {
					25: '#fcfaff',
				},
			},

			animation: {
				slideDownAndFade: 'slideDownAndFade 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
			},
			keyframes: {
				slideDownAndFade: {
					from: { opacity: '0', transforme: 'translateY(-4px)' },
					to: { opacity: '1', transforme: 'translateY(0)' },
				},
			},
		},
	},
	plugins: [],
}
export default config
