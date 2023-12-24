import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { Input } from '../Input'
import { Icon } from '../Icon'
import { elements } from './elemets'

export function Sidebar() {
	return (
		<aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
			<Logo />

			<Input.Root>
				<Icon name="Search" className="h-5 w-5 text-zinc-500" />
				<Input.Control placeholder="Search" />
			</Input.Root>

			<nav className="space-y-0.5">
				{elements.map((element) => (
					<NavItem key={element.title} title={element.title} name={element.name} />
				))}
			</nav>

			<div className="mt-auto flex flex-col gap-6">
				<nav className="space-y-0.5">
					<NavItem title="Support" name={'LifeBuoy'} />
					<NavItem title="Settings" name={'Cog'} />
				</nav>

				<UsedSpaceWidget />

				<div className="h-px bg-zinc-200" />

				<Profile />
			</div>
		</aside>
	)
}
