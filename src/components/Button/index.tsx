import { ComponentProps, forwardRef } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonStyle = tv({
	base: [
		'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none',
		'focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2',
		'active:opacity-80',
	],
	variants: {
		variant: {
			primary: 'bg-violet-600 text-white  hover:bg-violet-700',
			outline: 'border-zinc-300 text-zinc-700 shadow-sm hover:bg-zinc-50',
			ghost:
				'rounded-md px-2 text-zinc-500 shadow-none hover:bg-zinc-50 dark:text-zinc-400 dark:hover:bg-zinc-800',
		},
	},
	defaultVariants: {
		variant: 'primary',
	},
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyle>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ variant, className, ...props }, forwardRef) => {
		return (
			<button {...props} ref={forwardRef} className={buttonStyle({ variant, class: className })} />
		)
	},
)

Button.displayName = 'Button'
