type FileItemErrorProps = {
	filename: string
}

export function FileItemError({ filename }: FileItemErrorProps) {
	return (
		<div className="flex flex-1 flex-col items-start gap-1">
			<div className="flex flex-col">
				<span className="text-sm font-medium text-error-700 dark:text-error-400">
					Upload failed, please try again
				</span>
				<span className="text-sm font-medium text-error-600 dark:text-error-500">{filename}</span>
			</div>

			<button
				type="button"
				className="text-sm font-semibold text-error-700 hover:text-error-900 dark:text-error-400 dark:hover:text-error-300"
			>
				Try again
			</button>
		</div>
	)
}
