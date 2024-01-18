export  const getServerSideProps= (context)=> {
    return {
        props: { 
           data: context.query.data,
        }
    }
}

const Quote = ({data}) => {
    try {
        data = JSON.parse(data);
    } catch (error) {
        console.log("Quote data not found!");
        data = {a: "", q: "", c: "", h: ""}
    }
    return (
        <>
            <h1>Author: {data.a}</h1>
            <h3>Quote: {data.q}</h3>
            <p>Votes: {data.c}</p>
            <p>Formatted: {data.h}</p>
        </> 
     );
}
 
export default Quote;