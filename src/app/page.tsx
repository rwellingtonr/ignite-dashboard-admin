export default function Home() {
	return (
		<main className="flex h-screen flex-col items-center gap-3 bg-slate-100 p-8 text-center text-slate-900 dark:bg-slate-900 dark:text-slate-100">
			<div className="max-w-2xl">
				<h1 className="gap-3 text-2xl font-bold  md:text-4xl lg:text-5xl">Hello Tailwind</h1>
				<h2>Hello Tailwind</h2>
				<p>Hello Tailwind</p>
				<button className="rounded-md bg-sky-500 px-4 py-3 font-semibold text-slate-100 enabled:hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-sky-300 dark:text-sky-900">
					Sign In
				</button>
			</div>
		</main>
	)
}
