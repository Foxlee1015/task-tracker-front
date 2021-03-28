import React from 'react';
import {
    Box,
    CircularProgress,
    Typography,
  } from '@material-ui/core';

  
export default function MainHomeCardSub({data, loading}) {
  
    return (
        <Box>
            <Typography color="textPrimary" variant="h3">
                {loading ? (<CircularProgress />) : data.length}
            </Typography>
        </Box>
    );
  }
  