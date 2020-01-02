import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

import App from './App';
import store from "./reducers";

import * as serviceWorker from './serviceWorker';


function Root() {
  const { theme } = useSelector(state => state);

  return (
    <ThemeProvider theme={responsiveFontSizes(createMuiTheme(theme))}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  )
}



ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
