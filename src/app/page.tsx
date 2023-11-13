import Hero from '@/components/hero/hero'
import Nav from '@/components/nav/nav'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <header className='w-full bg-primary-110 flex items-center justify-center fixed top-0 left-0 px-5'>
        <Nav />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center w-full">
        <Hero />
      </main>
      <footer></footer>
    </>
  )
}
