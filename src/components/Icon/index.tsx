import { icons } from 'lucide-react'

export type IconName = keyof typeof icons

type IconProps = {
	name: IconName
	className: string
}

export function Icon({ className, name }: IconProps) {
	const LucideIcon = icons[name]

	return (
		<div>
			<LucideIcon className={className} />
		</div>
	)
}
