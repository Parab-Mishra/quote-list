import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import Link from 'next/link'

export const getStaticProps = async () => {
  const quote = await (await fetch('https://zenquotes.io/api/random')).json();
  return {
    props: { quote }
  }
}

export default function Home({quote}) {
  return (
    <>
      <Head>
        <title>Home | Quote List</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          Quote of the Day
        </h1>
        <p className={styles.text}>{quote[0].q}</p>
        <p className={styles['text-author']}>- {quote[0].a}</p>
        <Link href="/quotes" className={styles.btn}>See Quote Listing</Link>
      </div>
    </>
  )
}
