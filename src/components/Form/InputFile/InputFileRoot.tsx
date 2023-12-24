'use client'

import { createContext, ComponentProps, useContext, useId, useState } from 'react'

type InputFileRootProps = ComponentProps<'div'>

type InputFileContextProps = {
	id: string
	files: File[]
	onFilesSelected: (files: File[]) => void
}

const InputFileContext = createContext({} as InputFileContextProps)

export const useInputFile = () => useContext(InputFileContext)

export function InputFileRoot(props: InputFileRootProps) {
	const [files, setFiles] = useState<File[]>([])

	const id = useId()

	return (
		<InputFileContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
			<div {...props} />
		</InputFileContext.Provider>
	)
}
