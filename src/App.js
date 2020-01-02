import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';

import SideNav from './SideNav';
import TopNav from './components/TopNav';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import Skill from './components/Skill';
import Education from './components/Education';
import Contact from './components/Contact';

import { toggleSideBar } from './actions';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: theme.drawer.width,
      flexShrink: 0,
    },
  },
  drawerPaper: theme.drawer,
  noPadding: {
    // [theme.breakpoints.down('xs')]: theme.mixins.toolbar,
    padding: theme.spacing(0),
  }
}));

function App() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const { ui } = useSelector(state => state);
  const handleDrawerToggle = () => {
    dispatch(toggleSideBar(!ui.sidebar.open));
  };


  return (
      <div className={classes.root}>
        <Hidden smUp implementation="css">
          <TopNav />
        </Hidden>
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={ui.sidebar.open}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              <div onClick={() => dispatch(toggleSideBar(!ui.sidebar.open))}>
                <SideNav />
              </div>
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <SideNav />
            </Drawer>
          </Hidden>
        </nav>
        <List className={`${classes.noPadding}`} component="main">
          <About />
          <Experience />
          <Project />
          <Skill />
          <Education />
          <Contact />
        </List>
      </div>
  );
}

export default App;
