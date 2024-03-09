'use client'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { tabsElements } from './tabsElements'
import { TabItems } from './TabItems'
import { useState } from 'react'

export function SettingsTabs() {
	const [tabSelected, setTabSelected] = useState<string>(tabsElements[0].value)

	return (
		<Tabs.Root value={tabSelected} onValueChange={setTabSelected}>
			<ScrollArea.Root className="w-full" type="scroll">
				<ScrollArea.Viewport className="w-full overflow-x-scroll">
					<Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
						{tabsElements.map((tab) => {
							const isSelected = tabSelected === tab.value
							return <TabItems key={tab.value} {...tab} isSelected={isSelected} />
						})}
					</Tabs.List>
				</ScrollArea.Viewport>

				<ScrollArea.Scrollbar
					orientation="horizontal"
					className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
				>
					<ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
				</ScrollArea.Scrollbar>
			</ScrollArea.Root>
		</Tabs.Root>
	)
}
