'use client'

import { Logo } from './Logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputText } from '../Form/InputText'
import { Icon } from '../Icon'
import { elements } from './elemets'
import { tv } from 'tailwind-variants'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

const sidebar = tv({
	base: [
		'fixed left-0 right-0 top-0 z-10',
		'data-[state=open]:bottom-0 data-[state=open]:h-screen',
		'lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen',
		'flex flex-col gap-6',
		'border-b border-zinc-200 bg-white',
		'px-5 py-4',
		'lg:right-auto lg:w-80 lg:border-r lg:py-8',
		'dark:border-zinc-800 dark:bg-zinc-900',
	],
})

export function Sidebar() {
	return (
		<Collapsible.Root className={sidebar()}>
			<div className="flex items-center justify-between">
				<Logo />
				<Collapsible.Trigger asChild className="lg:hidden">
					<Button variant="ghost">
						<Icon name="Menu" className="h-6 w-6" />
					</Button>
				</Collapsible.Trigger>
			</div>

			<Collapsible.Content
				forceMount
				className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
			>
				<InputText.Root>
					<Icon name="Search" className="h-5 w-5 text-zinc-500" />
					<InputText.Control placeholder="Search" />
				</InputText.Root>

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
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
