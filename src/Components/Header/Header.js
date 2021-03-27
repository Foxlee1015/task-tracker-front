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

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} >
          <HeaderLink
            className={classes.rightLink}
            href="/"
            text="Home"
          />
          </div>
          <HeaderLink
            className={classes.title}
            href="/"
            text="Task Tracker"
          />
          <div className={classes.right}>
          {userInfo.name === null ? (
              <React.Fragment>
                <HeaderLink
                  className={classes.rightLink}
                  href="/user/login/"
                  text="Sign In"
                />
                <HeaderLink
                  className={clsx(classes.rightLink)}
                  href="/user/join"
                  text="Sign Up"
                 />
              </React.Fragment>
          ):(
            <React.Fragment>
              <HeaderLink            
                className={classes.rightLink}
                href="/main"
                text="Task"
              />
              <HeaderLink
                className={clsx(classes.rightLink)}
                href="/"
                onClick={e=>handleLogOut()}
                text="Log out"
              />
            </React.Fragment>
          )}
          </div>
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


const HeaderLink = ({
  variant="h6",
  underline="none",
  color="inherit",
  className,
  href="/",
  text="",
  onClick=()=>{},
}) => {
  return (
    <Link
      variant={variant}
      underline={underline}
      color={color}
      className={className}
      href={href}
      onClick={onClick}
    >{text}</Link>
  )
}
