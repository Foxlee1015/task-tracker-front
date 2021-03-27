import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography
  } from '@material-ui/core';
  import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
  import { red } from '@material-ui/core/colors';
  import CircularProgress from '@material-ui/core/CircularProgress';

  import useFetch from "../../../utils/hooks/useFetch";
  
  const MainHomeCard = ({
    title="",
    link="",
    fetchUrlEndpoint=""
  }) => {
    const match = useRouteMatch();
    const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/${fetchUrlEndpoint}`, []);

    return (
      <Card>
        <CardContent>
          <Grid
            container
            spacing={3}
            sx={{ justifyContent: 'space-between' }}
          >
            <Grid item>
              <Link to={`${match.url}/${link}`}>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="h6"
                >
                  {title}
                </Typography>
              </Link>
              
              <Typography
                color="textPrimary"
                variant="h3"
              >
                {loading ? (<CircularProgress />) : data.length}
              </Typography>
            </Grid>
            <Grid item>
            </Grid>
          </Grid>
          <Box
            sx={{
              pt: 2,
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <ArrowDownwardIcon sx={{ color: red[900] }} />
            <Typography
              sx={{
                color: red[900],
                mr: 1
              }}
              variant="body2"
            >
              12%
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
            >
              Since last month
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  } 
  
  export default MainHomeCard;