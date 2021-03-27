import React from "react";

import CircularProgress from '@material-ui/core/CircularProgress';

import useFetch from "../../utils/hooks/useFetch";

function MainLink() {
    const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/links/`, []);
    return (
      <div>
        <p>MainLink</p>
        {loading && <CircularProgress /> }
         {data && (
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
  