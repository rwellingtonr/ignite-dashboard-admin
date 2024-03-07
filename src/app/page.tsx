import { Icon } from '@/components/Icon'
import { InputText } from '@/components/Form/InputText'
import { SettingsTabs } from '@/components/SettingsTabs.tsx'
import { InputFile } from '@/components/Form/InputFile'
import { Select } from '@/components/Form/Select'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'

export default function Home() {
	return (
		<>
			<h1 className="text-medium text-3xl text-zinc-900">Settings</h1>
			<SettingsTabs />

			<section className="mt-6 flex flex-col">
				<div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center ">
					<div>
						<h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
						<span className="text-sm text-zinc-500">
							Update your photo and personal details heres.
						</span>
					</div>
					<div className="flex items-center gap-2">
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit" form="settings">
							Submit
						</Button>
					</div>
				</div>
				<form
					id="settings"
					action=""
					className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
				>
					{/* Name */}
					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
						<label htmlFor="firstName" className="text-sm font-medium text-zinc-700">
							Name
						</label>
						<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
							<InputText.Root key="name">
								<InputText.Control id="firstName" placeholder="Name" defaultValue={'Wellington'} />
							</InputText.Root>

							<div className="flex flex-col gap-3 lg:block">
								<label htmlFor="lastName" className="text-sm font-medium text-zinc-700 lg:sr-only">
									Last Name
								</label>
								<InputText.Root key="lastName" id="lastName">
									<InputText.Control placeholder="Name" defaultValue={'Wellington'} />
								</InputText.Root>
							</div>
						</div>
					</div>
					{/*  Email */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="email" className="text-sm font-medium text-zinc-700">
							Email address
						</label>
						<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
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
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="photo" className="text-sm font-medium text-zinc-700">
							Your photo
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								This will be displayed on your profile.
							</span>
						</label>

						<InputFile.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
							<InputFile.ImagePreview />
							<InputFile.Trigger
								htmlFor="photo"
								acceptedFilesText="SVG, PNG, JPG or GIF (max. 800x400px)"
							/>
							<InputFile.Control accept=".svg, .png, .jpg, .gif" id="photo" />
						</InputFile.Root>
					</div>

					{/* Role */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="role" className="text-sm font-medium text-zinc-700">
							Role
						</label>
						<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
							<InputText.Root key="role">
								<InputText.Control id="role" defaultValue={'Dev'} />
							</InputText.Root>
						</div>
					</div>

					{/* Country */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="country" className="text-sm font-medium text-zinc-700">
							Country
						</label>

						<Select.Root placeholder="Select a country...">
							<Select.Item text="Brasil" value="br" />
							<Select.Item text="Portugal" value="pt" />
						</Select.Root>
					</div>

					{/* Timezone */}

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="timezone" className="text-sm font-medium text-zinc-700">
							Timezone
						</label>

						<Select.Root placeholder="Select a timezone...">
							<Select.Item text="UTC" value="utc" />
							<Select.Item text="CET" value="cet" />
						</Select.Root>
					</div>

					{/* Bio */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<label htmlFor="bio" className="text-sm font-medium text-zinc-700">
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</label>
						<div className="space-y-3">
							<div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
								<Select.Root placeholder="" defaultValue="normal">
									<Select.Item text="Normal" value="normal" defaultChecked />
									<Select.Item text="Markdown" value="markdown" />
								</Select.Root>

								<div className="flex items-center gap-1">
									<Button type="button" variant="ghost">
										<Icon strokeWidth={3} name="Bold" className="h-4 w-4 text-zinc-500" />
									</Button>
									<Button type="button" className=" rounded-md p-2 hover:bg-zinc-50">
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
							</div>
							<Textarea
								id="bio"
								defaultValue="I'm a Product Designer based in Melboulne, Australia. I specialised in UX/UI design, brand strategy."
							/>
						</div>
					</div>

					{/* Portfolio */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
					<div className="flex items-center justify-end gap-2 pt-5 pt-5">
						<Button type="button" variant="outline">
							Cancel
						</Button>
						<Button type="submit">Submit</Button>
					</div>
				</form>
			</section>
		</>
	)
}
