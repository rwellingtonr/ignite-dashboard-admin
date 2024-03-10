'use client'

import { Icon } from '@/components/Icon'
import * as SelectRadix from '@radix-ui/react-select'
import { tv } from 'tailwind-variants'

const slots = tv({
	slots: {
		trigger: [
			'flex h-11 w-full items-center justify-between gap-2 rounded-lg px-3 py-2',
			'border border-zinc-300 shadow-sm outline-none',
			'focus:border-violet-300 focus:ring-1 focus:ring-violet-100 data-[placeholder]:text-zinc-600',
			'dark:border-zinc-700 dark:bg-zinc-800 dark:data-[placeholder]:text-zinc-400',
		],
		content: [
			'z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg',
			'border border-zinc-300 bg-white',
			'dark:border-zinc-700 dark:bg-zinc-800',
		],
		icon: 'h-5 w-5 text-zinc-300',
	},
})

type SelectRootProps = SelectRadix.SelectProps & {
	children: React.ReactNode
	placeholder?: string
}

export function SelectRoot({ children, placeholder, ...props }: SelectRootProps) {
	const { trigger, content, icon } = slots()
	return (
		<SelectRadix.Root {...props}>
			<SelectRadix.Trigger className={trigger()}>
				<SelectRadix.Value placeholder={placeholder} className="text-black" />
				<SelectRadix.Icon>
					<Icon name="ChevronDown" className={icon()} />
				</SelectRadix.Icon>
			</SelectRadix.Trigger>

			<SelectRadix.Portal>
				<SelectRadix.Content sideOffset={8} className={content()} position="popper" side="bottom">
					<SelectRadix.Viewport>{children}</SelectRadix.Viewport>
				</SelectRadix.Content>
			</SelectRadix.Portal>
		</SelectRadix.Root>
	)
}
