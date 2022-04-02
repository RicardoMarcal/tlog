import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>TLOG</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className='flex justify-between items-center bg-blue-400 border-y border-black py-14'>
        <div className='px-10 space-y-5'>
          <h1 className='text-6xl max-w-xl font-serif'>
            <span className='underline decoration-black decoration-4'>TLOG</span> is a place to learn, share and think
          </h1>
          <h2>
            It's easy and free to post your thoughts on any topic and connect with others.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Home
