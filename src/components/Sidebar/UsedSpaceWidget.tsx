import { tv } from 'tailwind-variants'

const slots = tv({
	slots: {
		container: 'flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800',
		span: 'text-sm/5 font-medium text-violet-700 dark:text-zinc-100',
		text: 'text-sm/5 text-violet-500 dark:text-zinc-400',
		dismiss:
			'cursor-pointer text-sm font-medium text-violet-500 hover:text-violet-700 dark:text-violet-300 dark:hover:text-violet-200',
		upgrade:
			'cursor-pointer text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100',
	},
})

export function UsedSpaceWidget() {
	const { container, span, text, dismiss, upgrade } = slots()

	return (
		<div className={container()}>
			<div className="space-y-1">
				<span className={span()}>Used space</span>
				<p className={text()}>Your team has used 80% of your available space. Need more?</p>
			</div>

			<div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
				<div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
			</div>

			<div className="space-x-3">
				<button type="button" className={dismiss()}>
					Dismiss
				</button>
				<button type="button" className={upgrade()}>
					Upgrade plan
				</button>
			</div>
		</div>
	)
}
