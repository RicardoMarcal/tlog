import Head from 'next/head'
import Header from '../components/Header'
import posts from '../posts';
import Post from '../components/Post';
import { NextPage } from 'next';

type Post = {
  title: string,
  slug: string,
  image: string,
  description: string,
  createdAt: string,
  author: {
    name: string,
    image: string,
  },
  content: string
}

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = ({ posts }) => {
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
          <Post key={i} post={post} />
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
