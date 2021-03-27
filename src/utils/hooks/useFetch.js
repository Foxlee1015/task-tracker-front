import { useState, useEffect } from "react";

function useFetch(api_url) {
    const [url, setUrl] = useState(api_url);
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
        if (url !== "") {
            fetchUrl();
        }
    }, [url]);

    const reFetch = () => {
        setLoading(true);
        const curretUrl = url;
        setUrl("");
        setUrl(curretUrl);
    }
    return [data, loading, reFetch];
}

export default useFetch;