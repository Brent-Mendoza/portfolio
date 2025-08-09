export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen w-full flex bg-neutral-900 justify-center items-center px-70 py-2 max-md:px-1 max-lg:px-1 max-xl:px-1">
      {children}
    </main>
  )
}
