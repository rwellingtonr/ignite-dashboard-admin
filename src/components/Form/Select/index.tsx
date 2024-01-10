'use client'
import { Icon } from '@/components/Icon'
import * as SelectRadix from '@radix-ui/react-select'

export function Select() {
	return (
		<SelectRadix.Root>
			<SelectRadix.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-500">
				<SelectRadix.Value placeholder="Select a country..." className="text-black " />
				<SelectRadix.Icon>
					<Icon name="ChevronDown" className="h-5 w-5 text-zinc-300" />
				</SelectRadix.Icon>
			</SelectRadix.Trigger>

			<SelectRadix.Portal>
				<SelectRadix.Content
					sideOffset={8}
					className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-300 bg-white"
					position="popper"
					side="bottom"
				>
					<SelectRadix.Viewport>
						<SelectRadix.Item
							value="br"
							className="flex items-center justify-between gap-2 px-2 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
						>
							<SelectRadix.ItemText className="text-black">Brasil</SelectRadix.ItemText>
							<SelectRadix.ItemIndicator>
								<Icon className="h-4 w-4 text-violet-500" name="Check" />{' '}
							</SelectRadix.ItemIndicator>
						</SelectRadix.Item>
					</SelectRadix.Viewport>
				</SelectRadix.Content>
			</SelectRadix.Portal>
		</SelectRadix.Root>
	)
}
