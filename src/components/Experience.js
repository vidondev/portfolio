import React from 'react';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';

import experience from '../data/experience';


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
    <section id="experience" className={`${classes.section}`}>
      <ListSubheader component="div" className={classes.listSubheader}><Typography variant="h5">Experience</Typography></ListSubheader>
      <ListItem component="div">
        <div className={classes.content}>
          <Grid container justify="center" alignItems="center" spacing={3}>
          {
            experience.map( val => {
              return (
                <Grid item {...gridProp}>
                  <Card className={classes.card}>
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={
                      <Link href={val.href} rel="noreferrer" target="_blank">
                        <img
                          className={classes.cardMedia}
                          src={val.logo}
                          title={val.company}
                          alt={val.company}
                        />
                      </Link>
                    }
                    title={
                        <Typography variant="h6" color="primary" className={classes.title}><Link href={val.href} rel="noreferrer" target="_blank" underline="none" className={classes.hoverline}>{val.company}</Link></Typography>
                    }
                    subheader={<Typography variant="subtitle1" color="secondary" style={{float: 'right'}}>{val.title}</Typography>}
                  />
                  <Divider className={classes.divider}/>
                  <CardContent>
                    <Typography variant="subtitle1" color="secondary" className={classes.subtitle1}>{val.desc}</Typography>
                    { val.summary.map( s => {
                      return (<div>
                        {s.title && <Typography variant="subtitle2" gutterBottom>{s.title}</Typography>}
                        <ul className={classes.ul}>
                          {
                            s.content.map( content => {
                              return (
                                 <li><Typography variant="body1">{content}</Typography></li>
                              )
                            })
                          }
                        </ul>
                        </div>
                      )
                    })}
                  </CardContent>
                    <CardContent className={classes.cardFooter}>
                      <Typography variant="body2" color="textSecondary">{val.date_location}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })
          }
          </Grid>
        </div>
      </ListItem>
    </section>
  )
}
