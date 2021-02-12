import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: '15px',
      height: '30px',
      width: '30px',
    },
    toolbar: {
      minHeight: '15px',
    },
  })
);

interface MobileBarProps {
  loggedUser: string;
  routeChange(pathName: string): void;
}

export const MobileBar: React.FC<MobileBarProps> = ({
  loggedUser,
  routeChange,
}) => {
  const classes = useStyles();
  // TODO : Use hook such as useNotifications();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton color="inherit" aria-label="Go home">
            <HomeIcon id="home-button" onClick={() => routeChange('/')} />
          </IconButton>
          <IconButton color="inherit" aria-label="Add post">
            <AddIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton aria-label="17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Go to user profile"
            onClick={() => routeChange(`/users/${loggedUser}`)}
          >
            <Avatar aria-label="User avatar" className={classes.avatar} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
