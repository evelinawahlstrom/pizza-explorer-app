import { createStore } from 'redux'
/*{import reducer from './reducer'}
    above line is when we are dealing with a single reducer*/

import reducer from './reducers' // which is shorthand for import ./reducers/index.js, the rootreducer


/*{Direct after this import:
    If you go back to your app now you'll get a 'TypeError: props.pizzas.map is not a function' because your mapStateToProps function of the PizzaListContainer needs adjusting:}*/

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)
/*{this above is how we are creating a store,
    if you don't know how: check the docs}*/

export default store
