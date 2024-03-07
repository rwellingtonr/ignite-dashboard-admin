'use client'

import { useInputFile } from './InputFileRoot'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FileItem } from './FileItem'

export function FileList() {
	const { files } = useInputFile()
	const [parent] = useAutoAnimate({
		easing: 'ease-in',
	})

	return (
		<div className="mt-4 space-y-3" ref={parent}>
			{files.map((file) => (
				<FileItem key={file.name} file={file} state={'error'} />
			))}
		</div>
	)
}
