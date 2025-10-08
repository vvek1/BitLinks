export default function About() {
  return (
    <main className="bg-pink-100 min-h-[50vh]">
      <section className="max-w-3xl mx-auto py-16 px-6 flex flex-col gap-6">
        <h1 className="text-3xl font-bold">About BitLinks</h1>
        <p>
          BitLinks is a simple, fast URL shortener focused on privacy and ease of use. 
          No accounts required—just shorten and share.
        </p>
        <p>
          Built with Next.js and MongoDB for speed and reliability.
        </p>
        <div className="flex gap-3">
          <a className="bg-pink-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white" href="/">Home</a>
          <a className="bg-pink-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white" href="/shorten">Try Now</a>
        </div>
      </section>
    </main>
  )
}


