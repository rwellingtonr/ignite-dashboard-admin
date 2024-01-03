'use client'

import { createContext, ComponentProps, useContext, useId, useState } from 'react'

type InputFileRootProps = ComponentProps<'div'>

type InputFileContextProps = {
	id: string
	files: File[]
	onFilesSelected: (files: File[], isMultiple: boolean) => void
}

const InputFileContext = createContext({} as InputFileContextProps)

export const useInputFile = () => useContext(InputFileContext)

export function InputFileRoot(props: InputFileRootProps) {
	const [files, setFiles] = useState<File[]>([])

	const id = useId()

	const handleSelectFiles = (files: File[], isMultiple: boolean) => {
		if (isMultiple) {
			setFiles((state) => [...state, ...files])
			return
		}
		setFiles(files)
	}

	return (
		<InputFileContext.Provider value={{ id, files, onFilesSelected: handleSelectFiles }}>
			<div {...props} />
		</InputFileContext.Provider>
	)
}
