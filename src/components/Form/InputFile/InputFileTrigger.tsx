'use client'

import { Icon } from '@/components/Icon'
import { ComponentProps } from 'react'
import { useInputFile } from './InputFileRoot'

type InputFileTriggerProps = ComponentProps<'label'> & {
	acceptedFilesText: string
}

export function InputFileTrigger({ acceptedFilesText, ...props }: InputFileTriggerProps) {
	const { id } = useInputFile()

	return (
		<label
			htmlFor={id}
			className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm transition-colors hover:border-violet-200 hover:text-violet-500"
			{...props}
		>
			<div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 transition-colors group-hover:border-violet-50 group-hover:bg-violet-100">
				<Icon name="UploadCloud" className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
			</div>

			<div className="flex flex-col items-center gap-1">
				<span className="text-sm">
					<span className="font-semibold text-violet-700">Click to upload</span> or drag and drop
				</span>
				<span className="text-sm">{acceptedFilesText}</span>
			</div>
		</label>
	)
}
