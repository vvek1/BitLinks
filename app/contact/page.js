export default function Contact() {
  return (
    <main className="bg-pink-100 min-h-[50vh]">
      <section className="max-w-3xl mx-auto py-16 px-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p>
          Have feedback or found an issue? Reach out and we'll get back soon.
        </p>
        <div className="grid gap-3">
          <a className="underline" href="mailto:contact@bitlinks.com">contact@bitlinks.com</a>
          <a className="underline" href="/github" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <div className="flex gap-3">
          <a className="bg-pink-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white" href="/">Home</a>
          <a className="bg-pink-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white" href="/shorten">Try Now</a>
        </div>
      </section>
    </main>
  )
}


