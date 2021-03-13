import React from "react";
import useFetch from "../../utils/hooks/useFetch";

function MainLink() {
    const [data, loading] = useFetch("http://54.180.93.113:16980/links/");
    return (
      <div>
        <p>MainLink</p>
        {loading ? (
            "Loading..."
        ) : (
            <ul>
            {data.map(({ id, url }) => (
                <li key={`photo-${id}`}>
                <img alt={url} src={url} />
                </li>
            ))}
            </ul>
        )}
      </div>
    );
  }
  
  export default MainLink;
  