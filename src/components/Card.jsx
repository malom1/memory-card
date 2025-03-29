import { useEffect, useState } from "react"

export default function Cards() {

    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const [catIds, setCatIds] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try{
    //             const response = await fetch('https://cataas.com/api/cats?tags=cute&limit=4');
    //             if (!response.ok) {
    //                 throw new Error (`Error: ${response.status}`);
    //             }

    //             const json = await response.json();
    //             setData(json);
    //             setCatIds(json.map((cat) => cat.id));
    //             setLoading(false);
    //         } catch (e) {
    //             setError(e);
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // if (loading) {
    //     return <p>loading...</p>;
    // }

    // if (error) {
    //     return <p>Error: {error.message}</p>;
    // }


    // return(
    //     <>
    // );
}