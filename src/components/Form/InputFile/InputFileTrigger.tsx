'use client'

import { Icon } from '@/components/Icon'
import { ComponentProps } from 'react'
import { useInputFile } from './InputFileRoot'
import { tv } from 'tailwind-variants'

const slots = tv({
	slots: {
		container: [
			'group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg',
			'border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition-colors',
			'hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500',
			'dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
		],
		iconWrapper: [
			'rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 transition-colors group-hover:border-violet-50 group-hover:bg-violet-100',
			'dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700',
		],
		icon: [
			'h-5 w-5',
			'text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500',
			'dark:group-hover:text-violet-300',
		],
	},
})

type InputFileTriggerProps = ComponentProps<'label'> & {
	acceptedFilesText: string
}

export function InputFileTrigger({ acceptedFilesText, ...props }: InputFileTriggerProps) {
	const { id } = useInputFile()

	const { container, iconWrapper, icon } = slots()

	return (
		<label htmlFor={id} className={container()} {...props}>
			<div className={iconWrapper()}>
				<Icon name="CloudUpload" className={icon()} />
			</div>

			<div className="flex flex-col items-center gap-1">
				<span className="text-sm">
					<span className="font-semibold text-violet-700 dark:text-violet-300">
						Click to upload
					</span>{' '}
					or drag and drop
				</span>
				<span className="text-sm">{acceptedFilesText}</span>
			</div>
		</label>
	)
}
