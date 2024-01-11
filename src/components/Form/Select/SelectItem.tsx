'use client'
import { Icon } from '@/components/Icon'
import * as SelectRadix from '@radix-ui/react-select'

type SelectItemProps = SelectRadix.SelectItemProps & {
	text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
	return (
		<SelectRadix.Item
			className="flex items-center justify-between gap-2 px-2 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
			{...props}
		>
			<SelectRadix.ItemText className="text-black">{text}</SelectRadix.ItemText>
			<SelectRadix.ItemIndicator>
				<Icon className="h-4 w-4 text-violet-500" name="Check" />
			</SelectRadix.ItemIndicator>
		</SelectRadix.Item>
	)
}
