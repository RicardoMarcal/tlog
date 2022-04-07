import Head from 'next/head'
import Link from 'next/link';
import { CLIENT_RENEG_WINDOW } from 'tls';
import Header from '../components/Header'
import posts from '../posts';

const Home = ({ posts }: any) => {
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

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-2 p2 md:p-6'>
        {posts.map((post: any, i: number) => 
          <Link key={i} href={`/post/${post.slug}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden'>
              <img
                className='w-full object-cover h-60 group-hover:scale-105 transition-transform duration-200 ease-in-out'
                src={post.image}
                alt={post.title}
              />
              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p className='text-lg font-bold'>{post.title}</p>
                  <p className='text-xs'>{post.description} by {post.author.name}</p>
                </div>
                <img
                  className='h-12 w-12 rounded-full'
                  src={post.author.image}
                  alt={post.author.name}
                />
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  return ({
    props: { posts }
  })
}

export default Home
