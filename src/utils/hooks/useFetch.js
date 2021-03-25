import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUrl() {
            const response = await fetch(url, {
                headers: {
                    "Authorization": localStorage.getItem('token')
                }});                
            const json = await response.json();
            console.log(json);
            if (json.result === null) {
                setData([]);
            } else {
                setData(json.result);
            };
            setLoading(false);
        }
        fetchUrl();
    }, [url]);
    return [data, loading];
}

export default useFetch;