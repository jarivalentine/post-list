import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Posts.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    
    return {
        props: { posts: data }
    } 
}

const Posts = ({ posts }) => {
    return ( 
        <>
        <Head>
          <title>Posts</title>
          <meta name="keywords" content="samenvatten" />
        </Head>
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <Link href={`/posts/${post.id}`} key={post.id}>
                    <a className={styles.single}>
                        <h3>{post.title}</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    );
}
 
export default Posts;