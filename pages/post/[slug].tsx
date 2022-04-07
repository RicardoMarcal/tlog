import { GetStaticProps } from 'next'
import Header from '../../components/Header'
import posts from '../../posts'

function Post({ post }: any) {
  return (
    <div>
        <Header />

        <img
            className='w-full h-40 object-cover'
            src={post.image}
            alt={post.title}
        />

        <article className='max-w-3xl mx-auto p-5'>
            <h1 className='text-3xl mt-10 mb-3'>{post.title}</h1>
            <h2 className='text-xl font-light'>{post.description}</h2>
            <div className='flex items-center space-x-2 mt-2'>
                <img
                    className='h-10 w-10 rounded-full'
                    src={post.author.image}
                    alt={post.author.name}
                />
                <p className='font-extralight text-sm'>Blog post by <span className='text-blue-600'>{post.author.name}</span> - Published at {new Date(post.createdAt).toLocaleDateString()}</p>
            </div>
            <p className='mt-10'>
                {post.content}
            </p>
        </article>
    </div>
  )
}

export const getStaticPaths = async () => {
    const paths = posts.map(post => ({
        params: {
            slug: post.slug
        }
    }))
    return({
        paths,
        fallback: 'blocking'
    })
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = posts.filter(p => p.slug === params?.slug)[0]
    if(!post){
        return {
            notFound: true
        }
    }

    return {
        props: { post },
        revalidate: 60
    }
}

export default Post