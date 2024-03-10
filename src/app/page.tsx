import { Icon } from '@/components/Icon'
import { InputText } from '@/components/Form/InputText'
import { SettingsTabs } from '@/components/SettingsTabs.tsx'
import { InputFile } from '@/components/Form/InputFile'
import { Select } from '@/components/Form/Select'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'
import { Label } from '@/components/Label'
import { TextEditor } from '@/components/TextEditor'

export default function Home() {
	return (
		<>
			<h1 className="text-medium text-3xl text-zinc-900 dark:text-zinc-100">Settings</h1>
			<SettingsTabs />

			<section className="mt-6 flex flex-col">
				<div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700 ">
					<div>
						<h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Personal info</h2>
						<span className="dark:zinc-text-400 text-sm text-zinc-500">
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
					className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
				>
					{/* Name */}
					<div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
						<Label htmlFor="firstName">Name</Label>
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
						<Label htmlFor="email">Email address</Label>
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
						<Label htmlFor="photo">
							Your photo
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								This will be displayed on your profile.
							</span>
						</Label>

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
						<Label htmlFor="role">Role</Label>
						<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
							<InputText.Root key="role">
								<InputText.Control id="role" defaultValue={'Dev'} />
							</InputText.Root>
						</div>
					</div>

					{/* Country */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<Label htmlFor="country">Country</Label>

						<Select.Root placeholder="Select a country...">
							<Select.Item text="Brasil" value="br" />
							<Select.Item text="Portugal" value="pt" />
						</Select.Root>
					</div>

					{/* Timezone */}

					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<Label htmlFor="timezone">Timezone</Label>

						<Select.Root placeholder="Select a timezone...">
							<Select.Item text="UTC" value="utc" />
							<Select.Item text="CET" value="cet" />
						</Select.Root>
					</div>

					{/* Bio */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<Label htmlFor="bio">
							Bio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Write a short introduction.
							</span>
						</Label>
						<div className="space-y-3">
							<TextEditor />
							<Textarea
								id="bio"
								defaultValue="I'm a Product Designer based in Melboulne, Australia. I specialised in UX/UI design, brand strategy."
							/>
						</div>
					</div>

					{/* Portfolio */}
					<div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
						<Label htmlFor="portfolio">
							Portfolio
							<span className="mt-0.5 block text-sm font-normal text-zinc-500">
								Share a few snippets of your word.
							</span>
						</Label>
						<InputFile.Root>
							<InputFile.Trigger acceptedFilesText="SVG, PDF, PNG, JPG or GIF" />
							<InputFile.FileList />
							<InputFile.Control multiple accept=".svg, .pdf, .png, .jpg, .gif" />
						</InputFile.Root>
					</div>

					{/* Submit */}
					<div className="flex items-center justify-end gap-2 pt-5">
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
