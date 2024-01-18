import Head from "next/head";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>Not Found | Quote List</title>
            </Head>
            <div className="not-found">
                <h1>Ooooops...!</h1>
                <h2>The page cannot be found!</h2>
                <p>Go back to the <Link href="/">Homepage</Link></p>
            </div>
        </>
     );
}
 
export default NotFound;