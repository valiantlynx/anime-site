import Hero from './components/Hero'
import Carousel from './components/Carousel'
import Recent from './recent/page'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 bg-base-200">
      <Carousel />
      <Recent />
      <Hero />
    </main>
  )
}

