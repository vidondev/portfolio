import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3, 0)
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
  },
  cardContent: {
    padding: theme.spacing(2, 1),
  },
  ul: {
    paddingLeft: theme.spacing(3),
    margin: theme.spacing(0, 0, 1, 0),

  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  cardMedia: {
    maxWidth: '100%',
    width: 'auto',
    maxHeight: 60,
    height: 'auto'
  },
  cardFooter: {
    backgroundColor: theme.palette.grey[200],
    padding: `${theme.spacing(2)}px!important`
  },
  divider: {
    margin: theme.spacing(0, 2)
  },
  hoverline: {
    '&:hover': {
      borderBottom:`3px solid ${theme.palette.primary.main}`
    }
  },
  title: {
    float: 'left',
    // [theme.breakpoints.down('xs')]: {
    //   float: 'right'
    // }
  },
  subtitle1: {
    fontStyle: 'italic'
  }
}));


export default function Experience() {
  const classes = useStyles();
  const gridProp = {
    md: 10,
    sm: 12,
    xs: 12
  }

  return (
    <section id="education" className={`${classes.section}`}>
      <ListSubheader component="div" className={classes.listSubheader}><Typography variant="h5">Education</Typography></ListSubheader>
      <ListItem component="div">
        <div className={classes.content}>
          <Grid container justify="center" alignItems="center" spacing={3}>
            <Grid item {...gridProp}>
              <Card className={classes.card}>
              <CardContent>
                <Typography variant="h6" color="primary">
                  <Link href="https://www.szu.edu.cn/" rel="noreferrer" target="_blank" underline="none" className={classes.hoverline}>SHENZHEN UNIVERSITY</Link>
                </Typography>
                <Typography variant="subtitle1" color="secondary" >Shen Zhen, CHINA</Typography>
                  <ul className={classes.ul}>
                    <li>
                      <Typography variant="body1">Major: Electronic Science and Technology</Typography>
                    </li>
                    <li>
                      <Typography variant="body1">Degree: Bachelor's Degree</Typography>
                    </li>
                  </ul>
              </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </ListItem>
    </section>
  )
}
