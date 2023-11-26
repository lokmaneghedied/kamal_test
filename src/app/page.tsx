export default function Home() {
  const version = process.env.APP_VERSION || '1'
  return (
    <main className="flex h-screen items-center justify-center text-4xl">
      KAMAL TEST - version {version}
    </main>
  )
}
