import { ComponentProps, forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const container = tv({
	base: [
		'min-h-[120px] w-full resize-y rounded px-3 py-2',
		'border border-zinc-300 shadow-sm outline-none',
		'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
		'dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400',
		'dark:focus:border-violet-500 dark:focus:ring-violet-500/20',
	],
})

type TextareaProps = ComponentProps<'textarea'>

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>((props, forwardRef) => (
	<textarea {...props} ref={forwardRef} className={container({ class: props.className })} />
))

Textarea.displayName = 'Textarea'
