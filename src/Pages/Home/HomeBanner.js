import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import HomeLayout from './HomeLayout';

// const backgroundImage =
//   'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80';

const backgroundImage = 
  'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HomeBanner(props) {
  const { classes } = props;

  return (
    <HomeLayout backgroundClassName={classes.background}>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Track your every single task
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Keep past task and check future task with Task Tracker.
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href="/user/join"
      >
        Join
      </Button>
    </HomeLayout>
  );
}

HomeBanner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBanner);