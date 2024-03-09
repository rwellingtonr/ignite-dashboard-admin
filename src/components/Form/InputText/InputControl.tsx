import { ComponentProps, forwardRef } from 'react'
import { tv } from 'tailwind-variants'

const control = tv({
	base: [
		'flex-1 border-0 bg-transparent p-0 outline-none',
		'text-zinc-900 placeholder-zinc-600',
		'dark:text-zinc-100 dark:placeholder-zinc-400',
	],
})

type InputControlProps = ComponentProps<'input'>

export const InputControl = forwardRef<HTMLInputElement, InputControlProps>((props, forwardRef) => (
	<input type="text" {...props} ref={forwardRef} className={control({ class: props.className })} />
))

InputControl.displayName = 'InputControl'
