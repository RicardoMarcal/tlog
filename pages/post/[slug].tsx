import { GetStaticProps } from 'next'
import Header from '../../components/Header'
import posts from '../../posts'

function Post({ post }: any) {
  return (
    <div>
        <Header />
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
        props: { post }
    }
}

export default Post