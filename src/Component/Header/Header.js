import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
});

function Header(props) {
  const { classes } = props;

  const userInfo = useSelector(
    state => (state.user)
  );

  const handleLogOut = (e) => {
    localStorage.removeItem('token');
  }

  const headerLinkParams = {
    variant:"h6",
    underline:"none",
    color:"inherit"
  }

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            {...headerLinkParams}
            className={classes.title}
            href="/"
          >
            {'Task Tracker'}
          </Link>
          {userInfo.name === null ? (
              <div className={classes.right}>
                <Link
                  {...headerLinkParams}
                  className={classes.rightLink}
                  href="/user/login/"
                >
                  {'Sign In'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  className={clsx(classes.rightLink)}
                  href="/user/join"
                >
                  {'Sign Up'}
                </Link>
              </div>
          ):(
            <div className={classes.right}>
              <Link            
                {...headerLinkParams}
                className={classes.rightLink}
                href="/main"
              >
                {'Task'}
              </Link>
              <Link
                {...headerLinkParams}
                className={clsx(classes.rightLink)}
                href="/"
                onClick={e=>handleLogOut()}
              >
                {'Log out'}
              </Link>
            </div>

          )}
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);