import { createStore, combineReducers } from 'redux';

import theme from './theme';
import ui from './ui';


const reducer = combineReducers({
  theme, ui
})

export default createStore(reducer);