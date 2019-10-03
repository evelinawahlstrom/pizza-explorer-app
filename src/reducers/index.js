import { combineReducers } from 'redux'
/*{this above is a named export so that name should be EXACT
    that when imported}*/
    
import pizzas from './pizzas'
import selectedPizza  from './selected-pizza'
/*{these two lines above we name pizzas 
    and selectedPizza -->but we could name it anything because its a default export
    --> see the pizzas.js or selectet-pizza.js files export }*/

export default combineReducers({
pizzas: pizzas, 
/*{this above could be just the value pizza as thee key and the value are the same in this          case! same goes for selectedPizza}*/
selectedPizza: selectedPizza
})

/*{ From reader about combineReducers:
    However, we can combine multiple reducers into one reducer using the redux method combineReducers. We give every reducer its own name and Redux takes care of the rest. For the reducer itself it does not matter: the reducer still only has access to its own state. For the mapStateToProps functions it does matter: they will receive the state of the different reducers inside the property with the name of that reducer.}*/