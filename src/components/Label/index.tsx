import type { ComponentProps } from 'react'

type LabelProps = ComponentProps<'label'>

export function Label(props: LabelProps) {
	return <label {...props} className="text-sm font-medium text-zinc-700 dark:text-zinc-300" />
}
