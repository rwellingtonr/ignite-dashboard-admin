import { Toggles } from './Toggles'
import { Toolbar } from './Toolbar'

export function TextEditor() {
	return (
		<div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
			<Toolbar />
			<Toggles />
		</div>
	)
}
