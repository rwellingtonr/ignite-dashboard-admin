import Image from 'next/image'
import { Icon } from '../Icon'
import { Button } from '../Button'

export function Profile() {
	return (
		<div className="flex w-full items-center gap-3">
			<Image
				src="https://github.com/rwellingtonr.png"
				alt=""
				width={40}
				height={40}
				className="rounded-full"
				quality={70}
			/>

			<div className="flex flex-1 flex-col lg:truncate">
				<span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
					Wellington Leardini
				</span>
				<span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
					wellington@fakemail.com
				</span>
			</div>
			<Button type="button" variant="ghost">
				<Icon name="LogOut" className="h-5 w-5 text-zinc-500" />
			</Button>
		</div>
	)
}
