'use client'

import { Icon } from '@/components/Icon'
import { useInputFile } from './InputFileRoot'
import { useMemo } from 'react'
import Image from 'next/image'

export function ImagePreview() {
	const { files } = useInputFile()

	const previewUrl = useMemo(() => {
		if (!files?.length) return null
		return URL.createObjectURL(files[0])
	}, [files])

	return previewUrl ? (
		<Image
			src={previewUrl}
			height={64}
			width={64}
			alt=""
			quality={70}
			className="h-16 w-16 rounded-full object-cover"
		/>
	) : (
		<div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
			<Icon name="User" className="h-8 w-8 text-violet-500 dark:text-violet-300" />
		</div>
	)
}
