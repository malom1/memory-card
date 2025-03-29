const fetchCats = async () => {
    try {
        const response = await fetch ("https://cataas.com/api/cats?tags=cute&limit=6"); 
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const json = response.json(); 
        return json.map((cat) => ({id: cat.id}))
    } catch (error) {
        console.error("Error fetching data:", error)
        return [];
    }
};

export default fetchCats;