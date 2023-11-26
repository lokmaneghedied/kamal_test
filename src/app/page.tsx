export default function Home() {
  const name = process.env.APP_VERSION
  return (
    <main className="flex h-screen items-center justify-center text-4xl">
      KAMAL TEST - version {name}
    </main>
  )
}
