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

        <hr className='max-w-lg my-5 mx-auto border border-blue-500' />
    
        <form className='flex flex-col p-5 max-w-2xl mx-auto mb-10'>
            <h3 className='text-sm text-blue-500'>Enjoyed the article?</h3>
            <h4 className='text-3xl font-bold'>Leave a comment below!</h4>
            <hr className='py-3 mt-2' />

            <label className="block mb-5">
                <span className='text-gray-700 '>Name</span>
                <input className='shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring ring-blue-500' placeholder="Solrin Planewalker" type="text" />
            </label>
            <label className="block mb-5">
                <span className='text-gray-700 '>Email</span>
                <input className='shadow border rounded py-2 px-3 form-input mt-1 block w-full outline-none focus:ring ring-blue-500' placeholder="solrin@planewalker.com" type="text" />
            </label>
            <label className="block mb-5">
                <span className='text-gray-700 '>Comment</span>
                <textarea className='shadow border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none focus:ring ring-blue-500' placeholder="Your comment..." rows={8} />
            </label>
        </form>
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