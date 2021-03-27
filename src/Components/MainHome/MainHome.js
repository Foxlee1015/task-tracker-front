import React from 'react';
import Grid from '@material-ui/core/Grid';

import MainHomeCard from "./Components/MainHomeCard";


export default function MainHome() {

    const mainHomeCards = [
        {
            title: "Task Group",
            fetchUrlEndpoint: "tasks/groups",
            link: "task-group",     
        },
        {
            title: "Task",
            fetchUrlEndpoint: "tasks/",
            link: "tasks",            
        },
        {
            title: "link",
            fetchUrlEndpoint: "links/",
            link: "links",            
        }
    ]
  
    return (
        <Grid container justify="center" spacing={6}>
            {mainHomeCards.map((card)=>(
                <Grid key={card.title} item>
                    <MainHomeCard 
                        title={card.title}
                        fetchUrlEndpoint={card.fetchUrlEndpoint}
                        link={card.link}
                    />
                </Grid>
            ))}
        </Grid>
    );
  }
  