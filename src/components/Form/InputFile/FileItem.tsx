import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { formatBytes } from '@/utils/formatBytes'
import { useInputFile } from './InputFileRoot'
import { tv, type VariantProps } from 'tailwind-variants'

const fileItem = tv({
	slots: {
		container: 'group flex items-start gap-4 rounded-lg border border-zinc-200 p-4',
		icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
		deleteButton: '',
	},
	variants: {
		state: {
			progress: {
				container: '',
			},
			completed: {
				container: 'border-violet-500',
			},
			error: {
				container: 'bg-error-25 border-error-300',
				icon: 'border-error-50 bg-error-100 text-error-600',
				deleteButton: 'text-error-700 hover:text-error-900',
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
				<Icon name="UploadCloud" className="h-4 w-4" />
			</span>
			{state === 'error' ? (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-error-700 text-sm font-medium">
							Upload failed, please try again
						</span>
						<span className="text-error-600 text-sm font-medium">{file.name}</span>
					</div>

					<button
						type="button"
						className="text-error-700 hover:text-error-900 text-sm font-semibold"
					>
						Try again
					</button>
				</div>
			) : (
				<div className="flex flex-1 flex-col items-start gap-1">
					<div className="flex flex-col">
						<span className="text-sm font-medium text-zinc-700">{file.name}</span>
						<span className="text-sm text-zinc-500">{formatBytes(file.size)}</span>
					</div>

					<div className="gao-3 flex w-full items-center">
						<div className="h-2 flex-1 rounded-full bg-zinc-100">
							<div
								className={`h-2 ${
									state === 'completed' ? 'w-full' : 'w-4/5'
								} rounded-full bg-violet-600`}
							/>
						</div>
						<span className="text-sm font-medium text-zinc-700">
							{state === 'completed' ? '100%' : '80%'}
						</span>
					</div>
				</div>
			)}

			{state === 'completed' ? (
				<Icon name="CheckCircle2" className="h-5 w-5 fill-violet-500 text-white" />
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
