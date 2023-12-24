'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { tabsElements } from './tabsElements'
import { TabItems } from './TabItems'
import { useState } from 'react'

export function SettingsTabs() {
	const [tabSelected, setTabSelected] = useState<string>(tabsElements[0].value)

	return (
		<Tabs.Root value={tabSelected} onValueChange={setTabSelected}>
			<Tabs.List className="mt-6 flex  w-full items-center gap-4 border-b border-zinc-200">
				{tabsElements.map((tab) => {
					const isSelected = tabSelected === tab.value
					return <TabItems key={tab.value} {...tab} isSelected={isSelected} />
				})}
			</Tabs.List>
		</Tabs.Root>
	)
}
