import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import WebIcon from '@material-ui/icons/Web';
import BarChartIcon from '@material-ui/icons/BarChart';
import SchoolIcon from '@material-ui/icons/School';
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const useStyles = makeStyles({
  itemIcon: {
    minWidth: 40
  }
})



function SideNav() {
  const classes = useStyles();
  const items = [
    {
      id: 'about',
      icon: PersonIcon,
      text: 'About'
    },
    {
      id: 'experience',
      icon: TrendingUpIcon,
      text: 'Experience'
    },
    {
      id: 'projects',
      icon: WebIcon,
      text: 'Projects'
    },
    {
      id: 'skills',
      icon: BarChartIcon,
      text: 'Skills'
    },
    {
      id: 'education',
      icon: SchoolIcon,
      text: 'Education'
    },
    {
      id: 'contact',
      icon: MailOutlineIcon,
      text: 'Contact'
    },
  ]

  return (
    <div>
      <List>
        <Hidden xsDown implementation="css">
          <ListItem>
            <ListItemText primary={<Typography variant="h5" color="primary">Wai Tung Ma</Typography>} secondary="Full Stack Developer" />
          </ListItem>
          <Divider />
        </Hidden>
      </List>
      <List>
        {items.map((item, index) => (
          <ListItem
            key={index}
            button
            component="a" href={`#${item.id}`}
          >
            <ListItemIcon className={classes.itemIcon}>{<item.icon />}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      </div>
  );
}

export default SideNav;
