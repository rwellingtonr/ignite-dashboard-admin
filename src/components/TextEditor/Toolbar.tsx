import { Select } from '../Form/Select'

export function Toolbar() {
	return (
		<Select.Root placeholder="" defaultValue="normal">
			<Select.Item text="Normal" value="normal" defaultChecked />
			<Select.Item text="Markdown" value="markdown" />
		</Select.Root>
	)
}
