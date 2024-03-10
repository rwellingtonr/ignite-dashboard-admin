'use client'
import { Icon } from '@/components/Icon'
import * as SelectRadix from '@radix-ui/react-select'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const slots = tv({
	slots: {
		item: [
			'flex items-center justify-between gap-2 px-2 py-2.5',
			'outline-none data-[highlighted]:bg-zinc-50 data-[highlighted]:outline-none',
			'dark:data-[highlighted]:bg-zinc-700',
		],
		span: 'text-black dark:text-zinc-100',
		icon: 'h-4 w-4 text-violet-500 dark:text-violet-300',
	},
})

type SelectItemProps = SelectRadix.SelectItemProps & {
	text: string
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
	({ text, ...props }, forwardRef) => {
		const { item, icon, span } = slots()
		return (
			<SelectRadix.Item {...props} ref={forwardRef} className={item()}>
				<SelectRadix.ItemText asChild>
					<span className={span()}>{text}</span>
				</SelectRadix.ItemText>
				<SelectRadix.ItemIndicator>
					<Icon className={icon()} name="Check" />
				</SelectRadix.ItemIndicator>
			</SelectRadix.Item>
		)
	},
)

SelectItem.displayName = 'SelectItem'
