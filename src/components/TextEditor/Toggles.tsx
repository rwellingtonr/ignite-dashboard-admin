import { Button } from '../Button'
import { Icon } from '../Icon'

export function Toggles() {
	return (
		<div className="flex items-center gap-1">
			<Button type="button" variant="ghost">
				<Icon strokeWidth={3} name="Bold" className="h-4 w-4 text-zinc-500" />
			</Button>
			<Button type="button" variant="ghost">
				<Icon strokeWidth={3} name="Italic" className="h-4 w-4 text-zinc-500" />
			</Button>
			<Button type="button" variant="ghost">
				<Icon strokeWidth={3} name="Link" className="h-4 w-4 text-zinc-500" />
			</Button>
			<Button type="button" variant="ghost">
				<Icon strokeWidth={3} name="List" className="h-4 w-4 text-zinc-500" />
			</Button>
			<Button type="button" variant="ghost">
				<Icon strokeWidth={3} name="ListOrdered" className="h-4 w-4 text-zinc-500" />
			</Button>
		</div>
	)
}
