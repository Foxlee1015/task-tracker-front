import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CircularProgress,
    Fab,
    Tooltip,
    Typography,
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/core/styles';
  import EditIcon from '@material-ui/icons/Edit';
  import useFetch from "../../../utils/hooks/useFetch";
  
  const useStyles = makeStyles({
  root: {
    marginTop: 20,
    marginBottom: 20,
    minWidth: 275,
  },
  box: {
    display: 'flex',
    justifyContent:'center'
  }
});

  const MainHomeCard = ({
    title="",
    link="",
    fetchUrlEndpoint="",
    subheader="",
    SubComponent=null
  }) => {
    const classes = useStyles();
    const match = useRouteMatch();
    const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/${fetchUrlEndpoint}`, []);

    return (
      <Card className={classes.root}>
        <CardHeader
          title={title}
          subheader={subheader}
        />
        <CardContent>
          <Typography color="textPrimary" variant="h3">
            {loading ? (<CircularProgress />) : data.length}
          </Typography>
          {SubComponent && <SubComponent data={data}/>}
        </CardContent>
        <CardActions className={classes.box}>
          <Link to={`${match.url}/${link}`}>
            <Tooltip title="Edit" interactive>
              <Fab color="primary" size="small" >
                <EditIcon />
              </Fab>
            </Tooltip>
          </Link>
        </CardActions>
      </Card>
    );
  } 
  
  export default MainHomeCard;