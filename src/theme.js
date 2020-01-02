import * as colors from '@material-ui/core/colors';
const colorKeys = Object.keys(colors);
const hues = colorKeys.slice(1, colorKeys.length-1);

let themes = {}
for(var i = 0; i < hues.length; i++) {
  themes[hues[i]] = colors[hues[i]];
}

export default themes;
