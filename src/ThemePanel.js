import React from "react";
import { capitalize } from '@material-ui/core/utils';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';


import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


import theme from './theme';

import {changeThemeColor, toggleSideBar} from './actions';


const useStyles = makeStyles(theme => ({
  backdrop: {
    backgroundColor: 'transparent'
  },
  root: {
    width: 360,
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3)
  },
  formControl: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.grey[400]
  },
  formLabel: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0, 1),
  },
  group: {
    margin: theme.spacing(1, 2)
  },
  radio: {
    padding: 0
  },
  radioIcon: {
    width: 46,
    height: 46
  },
  radioIconSelected: {
    width: 46,
    height: 46,
    // border: '1px solid white',
    color: theme.palette.common.white,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridList: {
    width: 46*6
  }
}));


function ColorSection(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector(store => store);

  return(
    <div className={classes.group}>
      <Typography variant="subtitle1">{capitalize(props.intent)}</Typography>
      <GridList cellHeight={46} className={classes.gridList} spacing={1} cols={6}>
      {Object.keys(theme).map( (val) => {
        const backgroundColor = theme[val][500];
        let checked = false;
        let palette;
        if(props.intent == 'primary') {
          palette = {
            primary: theme[val]
          }
          checked = store.theme.palette && store.theme.palette.primary === theme[val]
        } else {
          palette = {
            secondary: theme[val]
          }
          checked = store.theme.palette && store.theme.palette.secondary === theme[val]
        }
        return <GridListTile key={val}>
          <Radio
            name={props.intent}
            value={val}
            checked={checked}
            className={classes.radio}
            color="default"
            icon={<div className={classes.radioIcon} style={{ backgroundColor }} />}
            checkedIcon={
              <div className={classes.radioIconSelected} style={{ backgroundColor }}>
                <CheckIcon style={{ fontSize: 30 }} />
              </div>
            }
            onClick={ () => dispatch(changeThemeColor(palette)) }
          />
        </GridListTile>
      })}
      </GridList>
    </div>
  )
}



function ThemeList() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector(store => store);
  const handleChange = event => dispatch(changeThemeColor({type: event.target.value}))
  return (
    <div className={classes.root} >
      <Grid container spacing={3}>
        <Grid container item xs={12} justify="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h5">Theme Options</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={ () => dispatch(toggleSideBar(false)) }><CloseIcon /></IconButton>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <FormControl fullWidth component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className={classes.formLabel}>Theme Type</FormLabel>
              <div className={classes.group}>
                <RadioGroup aria-label="theme-type" name="theme-type" value={store.theme.palette.type} onChange={handleChange} >
                  <FormControlLabel value="light" control={<Radio color="primary" />} label="Light" />
                  <FormControlLabel value="dark" control={<Radio color="primary" />} label="Dark" />
                </RadioGroup>
              </div>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container item xs={12} justify="space-between" alignItems="center">
          <Grid item xs={12}>
            <FormControl fullWidth component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" className={classes.formLabel}>Theme Colors</FormLabel>
              <ColorSection intent="primary" />
              <ColorSection intent="secondary" />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

    </div>
  )
}

function ThemePanel() {
  const { ui } = useSelector(state => state);
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Drawer anchor="right" open={ui.sidebar.open}  BackdropProps={{classes: {root: classes.backdrop}}} onClose={ () => dispatch(toggleSideBar(false)) }>
      <ThemeList />
    </Drawer>
  );
}

export default ThemePanel;
