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


import skills from '../data/skills';


const useStyles = makeStyles(theme => ({
  content: {
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
  card: {
    position: 'relative'
  },
  img: {
    maxHeight: 100,
    maxWidth: '100%',
    display: 'block',
    margin: '0 auto',
    height: 'auto'
  },
  divider: {
    margin: theme.spacing(0, 2)
  }
}));


export default function Skill() {
  const classes = useStyles();
  const gridProp = {
    lg: 10,
    md: 10,
    sm: 12,
    xs: 12
  }

  return (
    <section id="skills" className={`${classes.section}`}>
      <ListSubheader component="div" className={classes.listSubheader}><Typography variant="h5">Skills</Typography></ListSubheader>
      <ListItem component="div">
        <div className={classes.content}>
          <Grid container spacing={5} justify="center">
          {
            skills.map( (d, index) => {
              return (
                <Grid item {...gridProp} key={index}>
                  <Card className={classes.card}>
                    <CardHeader
                      title={<Typography variant="h5">{d.title}</Typography>}
                    />
                    <Divider className={classes.divider}/>
                    <CardContent>
                      <Grid container spacing={5}>
                      {
                        d.skills.map( (skill, idx) => {
                          return (
                          <Grid item key={idx}>
                            <img src={skill.image} className={classes.img} alt={skill.text}/>
                            <Typography variant="subtitle1" align="center">{skill.text}</Typography>
                          </Grid>
                          )
                        })
                      }
                      </Grid>
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
