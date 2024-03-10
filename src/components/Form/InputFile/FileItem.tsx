import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { formatBytes } from '@/utils/formatBytes'
import { useInputFile } from './InputFileRoot'
import { tv, type VariantProps } from 'tailwind-variants'
import { FileItemError } from './FileItemError'

const fileItem = tv({
	slots: {
		container: 'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
		icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-500',
		deleteButton: 'transition-colors',
	},
	variants: {
		state: {
			progress: {
				container: 'dark:border-zinc-700',
			},
			completed: {
				container: 'border-violet-500 dark:border-violet-300/30',
			},
			error: {
				container: 'border-error-300 bg-error-25 dark:border-error-500/30 dark:bg-error-500/5',
				icon: 'border-error-50 bg-error-100 text-error-600 dark:border-error-500/30 dark:bg-error-500/5',
				deleteButton:
					'text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300',
			},
		},
	},
	defaultVariants: {
		state: 'progress',
	},
})

type FileItemProps = VariantProps<typeof fileItem> & {
	file: File
}

export function FileItem({ file, state }: FileItemProps) {
	const { onRemoveFile } = useInputFile()
	const { container, icon, deleteButton } = fileItem({ state })

	return (
		<div className={container()}>
			<span className={icon()}>
				<Icon name="CloudUpload" className="h-4 w-4" />
			</span>
			{state === 'error' ? (
				<FileItemError filename={file.name} />
			) : (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
							{file.name}
						</span>
						<span className="text-sm text-zinc-50 dark:text-zinc-400">
							{formatBytes(file.size)}
						</span>
					</div>

					<div className="gao-3 flex w-full items-center">
						<div className="h-2 flex-1 rounded-full bg-zinc-100 dark:bg-zinc-600">
							<div
								className={`h-2 ${
									state === 'completed' ? 'w-full' : 'w-4/5'
								} rounded-full bg-violet-600 dark:bg-violet-400`}
							/>
						</div>
						<span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
							{state === 'completed' ? '100%' : '80%'}
						</span>
					</div>
				</div>
			)}

			{state === 'completed' ? (
				<Icon name="CircleCheck" className="h-5 w-5 fill-violet-500 text-white" />
			) : (
				<Button
					type="button"
					variant="ghost"
					onClick={() => onRemoveFile(file.name)}
					className={deleteButton()}
				>
					<Icon name="Trash2" className="h-5 w-5" />
				</Button>
			)}
		</div>
	)
}
