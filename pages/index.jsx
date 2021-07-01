import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="keywords" content="samenvatten" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Ipsum culpa consequat tempor nisi voluptate pariatur ad magna aliquip.</p>
      <p className={styles.text}>Ipsum culpa consequat tempor nisi voluptate pariatur ad magna aliquip.</p>
      <Link href="/posts"><a className={styles.btn}>See posts</a></Link>
    </div>
    </>
  )
}
