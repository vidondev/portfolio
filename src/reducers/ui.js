const initialState = {
  sidebar: {
    open: false
  }
}

function ui(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE":
      const { sidebar } = action.payload;
      return {...state, sidebar }    
    default:
      return state;
  }
}

export default ui;
