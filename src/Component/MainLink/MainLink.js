import React from "react";
import useFetch from "../../utils/hooks/useFetch";

function MainLink() {
    const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/links`);
    return (
      <div>
        <p>MainLink</p>
        {loading ? (
            "Loading..."
        ) : (
            <ul>
            {data.map(({ id, url, description }) => (
                <li key={`url-${id}`}>
                    <a href={url}>{description}</a>
                </li>
            ))}
            </ul>
        )}
      </div>
    );
  }
  
  export default MainLink;
  