import { ComponentProps } from 'react'
import { tv } from 'tailwind-variants'

const container = tv({
	base: [
		'flex w-full items-center gap-2 rounded-lg',
		'px-3 py-2',
		'border border-zinc-300 shadow-sm',
		'focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100',
		'dark:border-zinc-700 dark:bg-zinc-800',
		'dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20',
	],
})

type InputRootProps = ComponentProps<'div'>

export function InputRoot(props: InputRootProps) {
	return <div {...props} className={container({ class: props.className })} />
}
