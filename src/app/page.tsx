import { Icon } from '@/components/Icon'
import { InputText } from '@/components/Form/InputText'
import { SettingsTabs } from '@/components/SettingsTabs.tsx'
import { InputFile } from '@/components/Form/InputFile'

export default function Home() {
	return (
		<>
			<h1 className="text-medium text-3xl text-zinc-900">Settings</h1>
			<SettingsTabs />

			<section className="mt-6 flex flex-col">
				<article className="flex items-center justify-between border-b border-zinc-200 pb-5 ">
					<div>
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo and personal details heres.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<button
							type="button"
							className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							form="settings"
							type="submit"
							className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
						>
							Submit
						</button>
					</div>
				</article>
				<form
					id="settings"
					action=""
					className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
				>
					{/* Name */}
					<div className="grid grid-cols-form gap-3">
						<label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
							Name
						</label>
						<div className="grid grid-cols-2 gap-6">
							<InputText.Root key="name">
								<InputText.Control id="firstName" placeholder="Name" defaultValue={'Wellington'} />
							</InputText.Root>
							<InputText.Root key="lastName">
								<InputText.Control placeholder="Name" defaultValue={'Wellington'} />
							</InputText.Root>
						</div>
					</div>
					{/*  Email */}
					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="email" className="text-sm font-medium text-zinc-700">
							Email address
						</label>
						<div className="grid grid-cols-2 gap-6">
							<InputText.Root key="email">
								<Icon name="Mail" className="h-5 w-5 text-zinc-500" />
								<InputText.Control
									id="email"
									placeholder="e-mail"
									type="email"
									defaultValue={'wellington@fake.mail.com'}
								/>
							</InputText.Root>
						</div>
					</div>
					{/* Photo */}
					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="photo" className="text-sm font-medium text-zinc-700">
							Your photo
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								This will be displayed on your profile.
							</span>
						</label>

						<InputFile.Root className="flex items-start gap-5">
							<InputFile.ImagePreview />
							<InputFile.Trigger
								htmlFor="photo"
								acceptedFilesText="SVG, PNG, JPG or GIF (max. 800x400px)"
							/>
							<InputFile.Control accept=".svg, .png, .jpg, .gif" id="photo" />
						</InputFile.Root>
					</div>

					{/* Role */}
					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>
						<div className="grid grid-cols-2 gap-6">
							<InputText.Root key="role">
								<InputText.Control id="role" defaultValue={'Dev'} />
							</InputText.Root>
						</div>
					</div>

					{/* Country */}
					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="country" className="text-sm font-medium text-zinc-700">
							Country
						</label>
						<div className="grid grid-cols-2 gap-6">
							<InputText.Root key="country">
								<InputText.Control id="country" defaultValue={'Dev'} />
							</InputText.Root>
						</div>
					</div>

					{/* Timezone */}

					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
							Timezone
						</label>
						<div className="grid grid-cols-2 gap-6">
							<InputText.Root key="timezone">
								<InputText.Control id="timezone" defaultValue={'Dev'} />
							</InputText.Root>
						</div>
					</div>

					{/* Bio */}
					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>
						<div className="grid grid-cols-2 gap-6">
							<InputText.Root key="bio">
								<InputText.Control id="bio" placeholder="e-mail" />
							</InputText.Root>
						</div>
					</div>

					{/* Portfolio */}
					<div className="grid grid-cols-form gap-3 pt-2">
						<label htmlFor="portfolio" className="text-sm font-medium text-zinc-700">
							Portfolio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Share a few snippets of your word.
							</span>
						</label>
						<InputFile.Root>
							<InputFile.Trigger acceptedFilesText="SVG, PDF, PNG, JPG or GIF" />
							<InputFile.FileList />
							<InputFile.Control multiple accept=".svg, .pdf, .png, .jpg, .gif" />
						</InputFile.Root>
					</div>

					{/* Submit */}
					<div className="flex items-center justify-end gap-2 pt-5">
						<button
							type="button"
							className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
						>
							Cancel
						</button>
						<button
							type="submit"
							className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
						>
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	)
}
