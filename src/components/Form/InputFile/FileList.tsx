'use client'

import { Icon } from '@/components/Icon'
import { useInputFile } from './InputFileRoot'
import { formatBytes } from '@/utils/formatBytes'

export function FileList() {
	const { files } = useInputFile()

	return (
		<div className="mt-4 space-y-3">
			{files.map((file) => (
				<div
					className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
					key={file.name}
				>
					<span className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
						<Icon name="UploadCloud" className="h-4 w-4" />
					</span>

					<div className="flex flex-1 flex-col items-start gap-1">
						<div className="flex flex-col">
							<span className="text-sm font-medium text-zinc-700">{file.name}</span>
							<span className="text-sm text-zinc-500">{formatBytes(file.size)}</span>
						</div>

						<div className="gao-3 flex w-full items-center">
							<div className="h-2 flex-1 rounded-full bg-zinc-100">
								<div className="h-2 w-4/5 rounded-full bg-violet-600" />
							</div>
							<span className="text-sm font-medium text-zinc-700">80%</span>
						</div>
					</div>

					<button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
						<Icon name="Trash2" className="h-5 w-5 text-zinc-500" />
					</button>
				</div>
			))}
		</div>
	)
}
