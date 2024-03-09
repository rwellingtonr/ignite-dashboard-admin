import { Icon, type IconName } from '../Icon'
import { tv } from 'tailwind-variants'

const slots = tv({
	slots: {
		container:
			'group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800',
		icon: 'h-5 w-5 text-zinc-500',
		text: 'font-medium text-zinc-700 group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-300',
		chevronDown: 'ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-400 dark:text-zinc-600',
	},
})

type NavItemProps = {
	title: string
	name: IconName
}

export function NavItem({ title, name }: NavItemProps) {
	const { chevronDown, container, icon, text } = slots()

	return (
		<a href="#" className={container()}>
			<Icon className={icon()} name={name} />
			<span className={text()}>{title}</span>
			<Icon name="ChevronDown" className={chevronDown()} />
		</a>
	)
}
