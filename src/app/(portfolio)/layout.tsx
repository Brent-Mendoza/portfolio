export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen w-full flex">{children}</main>
}
