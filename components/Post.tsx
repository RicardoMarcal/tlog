import Link from "next/link"

function Post({ post }: any) {
  return (
    <Link href={`/post/${post.slug}`}>
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
  )
}

export default Post