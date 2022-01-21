import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';


const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3, 0),
    [theme.breakpoints.down('xs')]: {
      marginTop: 56
    }
  },
  section: {
    position: 'relative',
  },
  listSubheader: {
    color: '#fff',
    padding: theme.spacing(3, 2),
    backgroundColor: fade(theme.palette.primary.main, 0.95),
    [theme.breakpoints.down('xs')]: {
      top: 56
    }
  }
}));


export default function About() {
  const classes = useStyles();
  return (
    <section id="about" className={`${classes.section}`}>
      <ListSubheader component="div" className={classes.listSubheader}><Typography variant="h5" color="inherit">About</Typography></ListSubheader>
      <ListItem component="div">
        <div className={classes.content}>
          <Typography paragraph>
          Have 10 years of web development experience, mostly on the Linux & OS X platform. I started with PHP for building websites. I have always invested time and effort in core skills for building website and this approach has seen me pick up new skills quickly and succeed.

          </Typography>
          <Typography paragraph>
          Over the last few years I have started diversifying technical skills to cover non-web technologies and products. iOS is an integral part of this. This has exposed me to many other tools.
          </Typography>
          <Typography paragraph>
          I enjoy all the challenges this industry offers; technology, customer satisfaction, innovation and on-going learning. I'm fortunate in that I'm passionate about my day job. Relaxing for me is coding and keeping up to date with technology.
          </Typography>
        </div>
      </ListItem>
    </section>
  )
}
