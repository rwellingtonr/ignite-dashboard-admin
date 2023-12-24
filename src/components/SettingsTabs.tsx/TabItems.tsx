'use client'

import * as TabsRadix from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

type TabItemsProps = {
	label: string
	value: string
	isSelected: boolean
}

export function TabItems({ isSelected, label, value }: TabItemsProps) {
	return (
		<TabsRadix.Trigger
			value={value}
			className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=true]:text-violet-700"
		>
			<span className="">{label}</span>
			{isSelected && (
				<motion.div
					layoutId="tab-item"
					className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
				/>
			)}
		</TabsRadix.Trigger>
	)
}
