import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setData(json.result);
            setLoading(false);
        }
        fetchUrl();
    }, [url]);
    return [data, loading];
}

export default useFetch;