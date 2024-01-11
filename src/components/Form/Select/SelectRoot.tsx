'use client'
import { Icon } from '@/components/Icon'
import * as SelectRadix from '@radix-ui/react-select'

type SelectRootProps = SelectRadix.SelectProps & {
	children: React.ReactNode
	placeholder?: string
}

export function SelectRoot({ children, placeholder, ...props }: SelectRootProps) {
	return (
		<SelectRadix.Root {...props}>
			<SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-500">
				<SelectRadix.Value placeholder={placeholder} className="text-black " />
				<SelectRadix.Icon>
					<Icon name="ChevronDown" className="h-5 w-5 text-zinc-300" />
				</SelectRadix.Icon>
			</SelectRadix.Trigger>

			<SelectRadix.Portal>
				<SelectRadix.Content
					sideOffset={8}
					className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
					position="popper"
					side="bottom"
				>
					<SelectRadix.Viewport>{children}</SelectRadix.Viewport>
				</SelectRadix.Content>
			</SelectRadix.Portal>
		</SelectRadix.Root>
	)
}
