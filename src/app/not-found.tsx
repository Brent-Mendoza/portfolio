import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center bg-neutral-900 font-inter">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-100">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-cyan-100/80">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
        >
          Go to Homepage
        </Link>
      </div>
    </main>
  )
}
