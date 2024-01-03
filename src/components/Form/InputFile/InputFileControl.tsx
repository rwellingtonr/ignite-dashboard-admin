'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useInputFile } from './InputFileRoot'

type InputFileControlProps = ComponentProps<'input'>

export function InputFileControl({ multiple = false, ...props }: InputFileControlProps) {
	const { id, onFilesSelected } = useInputFile()

	const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files?.length) return
		const files = Array.from(event.target.files)
		onFilesSelected(files, multiple)
	}

	return (
		<input
			type="file"
			className="sr-only"
			id={id}
			multiple={multiple}
			onChange={handleFilesSelected}
			{...props}
		/>
	)
}
