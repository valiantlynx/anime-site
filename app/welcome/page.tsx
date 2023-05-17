import Welcome from '@/app/components/Welcome'

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Welcome />
    </main>
  )
}

export default page