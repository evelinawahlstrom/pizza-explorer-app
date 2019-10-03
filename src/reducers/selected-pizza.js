/*{here we are adding our second reducer, which is possible because we have added a combineReducers in the recent step before adding this js.file}*/

  /*{before writing the logic of the reducer, just see if it shows up in the redux tools}*/

const reducer = (state = null, action = {}) => {
    switch (action.type) {
    case 'SELECT_PIZZA':
      return action.payload
    default:
      return state
    }
  }
  
  export default reducer

