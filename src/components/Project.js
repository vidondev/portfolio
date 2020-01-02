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
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import Link from '@material-ui/core/Link';

import projects from '../data/projects';


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
  media: {
    maxHeight: 240,
    minHeight: 240
  },
  card: {
    position: 'relative',
    height: '100%'
  },
  cardContent: {
    paddingTop: 0,
    paddingBottom: 0
  },
  cardReveal: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    padding: 0,
    transition: 'transform 0.3s',
    transform: 'translateY(100%)',
    '&.open': {
      transform: 'translateY(0%)'
    }
  },
  cardRevealConent: {
    position: 'relative',
    height: '100%'
  },
  cardAction: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0
  }
}));


export default function Project() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const gridProp = {
    lg: 4,
    md: 6,
    sm: 12,
    xs: 12
  }

  return (
    <section id="projects" className={`${classes.section}`}>
      <ListSubheader component="div" className={classes.listSubheader}><Typography variant="h5">Projects</Typography></ListSubheader>
      <ListItem component="div">
        <div className={classes.content}>
          <Grid alignItems="stretch" justify="center" container spacing={3}>
          {
            projects.map( (project, index) => {
              return (
                <Grid item {...gridProp} key={project.id}>
                  <Card className={classes.card}>
                    <CardActionArea onClick={ () => {setExpanded(index)}}>
                      <CardMedia
                      component="img"
                      className={classes.media}
                      image={project.image}
                      title={project.title}
                      />
                    </CardActionArea>
                    <CardHeader
                        action={
                          <IconButton color="primary" onClick={ () => {setExpanded(index)}}>
                            <MoreVertIcon />
                          </IconButton>
                        }
                        title={project.title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {project.desc}
                      </Typography>
                    </CardContent>
                    <div className={`${classes.cardReveal} ${expanded === index ? 'open' : ''}`}>
                      <div className={classes.cardRevealConent}>
                        <CardHeader
                            onClick={ () => {setExpanded(false)}}
                            action={
                              <IconButton color="secondary">
                                <CloseIcon />
                              </IconButton>
                            }
                            title={<Typography variant="h6" color="secondary">Technologies</Typography>}
                        />
                        <CardContent className={classes.cardContent}>
                          <ul>
                            {
                              project.content && project.content.map( content => {
                                return <li><Typography variant="body1">{content}</Typography></li>
                              })
                            }
                          </ul>
                        </CardContent>
                        {
                          project.url &&
                          <div className={classes.cardAction}>
                            <Divider />
                            <CardActions>
                              <Fab color="secondary" size="small" component={Link} href={project.url} rel="noreferrer" target="_blank" underline="none">
                                  <OpenInNewIcon />
                              </Fab>
                            </CardActions>
                          </div>
                        }
                      </div>
                    </div>
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
