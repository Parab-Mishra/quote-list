import Head from "next/head";
import styles from "../../styles/Quotes.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
    const data = await (await fetch('https://zenquotes.io/api/quotes')).json();

    return {
        props: {
            quotes: data,
        }
    }
}

const Quotes = ({ quotes }) => {
    return ( 
        <>
            <Head>
                <title>Quotes | Quote List</title>
            </Head>
            <div>
                <h1>Top 50 Quotes</h1>
                {quotes.map((quote,i) => (
                    <Link key={i} className={styles.single} href={{
                        pathname: `/quotes/${quote.c}`,
                        query:{data: JSON.stringify(quote)}
                    }}>
                        <div className={styles.author}>{quote.a}</div>
                        <div>{quote.q}</div>
                 </Link>
                ))}
            </div>
        </>
     );
}
 
export default Quotes;