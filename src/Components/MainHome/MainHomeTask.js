import React, {useEffect, useState} from 'react';
import {
    Box,
    Typography,
  } from '@material-ui/core';

import {formatDate} from "../../utils/utils";
  
export default function MainHomeTask({data}) {
    const [taskCountToday, setTaskCountToday] = useState(0);
    const [taskCountThisMonth, setTaskCountThisMonth] = useState(0);

    useEffect(()=>{
        const today = formatDate(new Date());
        const thisMonth = today.substring(0, today.length - 3);
        let countToday = 0;
        let countThisMonth = 0;
        for (const task of data) {
            const taskDatetime = task.datetime;
            if (taskDatetime.startsWith(today)) {
                countToday += 1;
            }
            if (taskDatetime.startsWith(thisMonth)) {
                countThisMonth += 1;
            }
        }
        setTaskCountToday(countToday);
        setTaskCountThisMonth(countThisMonth);
    }, [data])
  
    return (
        <Box>
            <Typography variant="body2">
                Today's task : {taskCountToday}
            </Typography>
            <Typography color="textSecondary" variant="caption">
                This month's task : {taskCountThisMonth}
            </Typography>
        </Box>
    );
  }
  