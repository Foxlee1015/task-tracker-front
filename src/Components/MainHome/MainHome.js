import React from 'react';
import Grid from '@material-ui/core/Grid';

import MainHomeCard from "./Components/MainHomeCard";
import MainHomeTask from "./MainHomeTask";

import {formatDate} from "../../utils/utils";

export default function MainHome() {

    const mainHomeCards = [
        {
            title: "Task",
            fetchUrlEndpoint: "tasks/",
            subheader: formatDate(new Date()),
            link: "tasks", 
            SubComponent: MainHomeTask,           
        },
        {
            title: "Task Group",
            subheader: "",
            fetchUrlEndpoint: "tasks/groups",
            link: "task-group",
            SubComponent: null,   
        },
        {
            title: "link",
            subheader: "",
            fetchUrlEndpoint: "links/",
            link: "links",    
            SubComponent: null,        
        }
    ]
  
    return (
        <Grid container justify="center" spacing={6}>
            {mainHomeCards.map((card)=>(
                <Grid key={card.title} item>
                    <MainHomeCard {...card}/>
                </Grid>
            ))}
        </Grid>
    );
  }
  