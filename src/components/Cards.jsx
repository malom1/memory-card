import { useEffect, useState } from "react"

export default function Cards() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://cataas.com/api/cats?tags=cute&limit=4');
                if (!response.ok) {
                    throw new error (`Error: ${response.status}`);
                }

                const json = await response.json();
                setData(json);
                setLoading(false);
            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <p>loading...</p>;
    }

    if (error) {
        return <p>error: {error.message}</p>;
    }


    return(
        <div className="card-container">
            <pre>{JSON.stringify(data, null, 1)}</pre>
            {/* <div className="card">
                <img src="https://cataas.com/cat" alt="" />
                <div className="title">
                    <h3>Cat 1</h3>
                </div>
            </div>
            <div className="card">
                <img src="https://cataas.com/cat" alt="" />
                <div className="title">
                    <h3>Cat 2</h3>
                </div>
            </div>
            <div className="card">
                <img src="https://cataas.com/cat" alt="" />
                <div className="title">
                    <h3>Cat 3</h3>
                </div>
            </div>
            <div className="card">
                <img src="https://cataas.com/cat" alt="" />
                <div className="title">
                    <h3>Cat 4</h3>
                </div>
            </div> */}

        </div>
    )
}