'use client'

import * as TabsRadix from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const slots = tv({
	slots: {
		container: [
			'group relative px-1 pb-4 text-sm font-medium',
			'text-zinc-500 outline-none hover:text-violet-700 data-[state=active]:text-violet-700',
			'dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300',
		],
		span: [
			'whitespace-nowrap rounded group-focus-visible:ring-2',
			'group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4',
		],
		underline: 'absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700 dark:bg-violet-300',
	},
})

type TabItemsProps = TabsRadix.TabsTriggerProps & {
	label: string
	isSelected: boolean
}

export const TabItems = forwardRef<HTMLButtonElement, TabItemsProps>(
	({ isSelected, label, ...props }, forwardRef) => {
		const { container, span, underline } = slots()

		return (
			<TabsRadix.Trigger {...props} className={container()} ref={forwardRef}>
				<span className={span()}>{label}</span>
				{isSelected && <motion.div layoutId="tab-item" className={underline()} />}
			</TabsRadix.Trigger>
		)
	},
)

TabItems.displayName = 'TabItems'
