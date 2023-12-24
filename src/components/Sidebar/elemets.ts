import type { IconName } from '../Icon'

type ElementProps = {
	name: IconName
	title: string
}

export const elements: ElementProps[] = [
	{
		title: 'Home',
		name: 'Home',
	},
	{
		title: 'Dashboard',
		name: 'BarChart',
	},
	{
		title: 'Projects',
		name: 'SquareStack',
	},
	{
		title: 'Tasks',
		name: 'CheckSquare',
	},
	{
		title: 'Reporting',
		name: 'Flag',
	},
	{
		title: 'Users',
		name: 'Users',
	},
]
