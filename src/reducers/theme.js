import themeOptions from '../theme'


const initialState = {
  palette: {
    primary: themeOptions['indigo'],
    secondary: themeOptions['brown'],
    type: 'light'
  },
  drawer: {
    width: 190
  }
}

function theme(state = initialState, action) {

  switch (action.type) {
    case "RESET_THEME":
      return initialState;
    case "CHANGE_THEME":
      const { palette } = action.payload;
      return { ...state, palette: {...state.palette, ...palette} }
    default:
      return state;
  }
}

export default theme;
