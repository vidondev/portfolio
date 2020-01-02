import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { toggleSideBar } from '../actions';


const useStyles = makeStyles(theme => ({
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${theme.drawer.width}px)`,
      marginLeft: theme.drawer.width,
    },
    backgroundColor: '#fff'
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    textAlign: 'center'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    zIndex: 999
  },
}));

function TopNav() {
  const { ui } = useSelector(state => state);
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="primary"
          aria-label="open drawer"
          edge="start"
          onClick={ () => dispatch(toggleSideBar(!ui.sidebar.open)) }
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <ListItem component="div" className={classes.title}>
          <ListItemText primary={<Typography variant="h5" color="primary">Wai Tung Ma</Typography>} secondary="Full Stack Developer" />
        </ListItem>
      </Toolbar>
    </AppBar>
  )
}

export default TopNav;
