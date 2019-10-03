import React from 'react'
import PizzaList from './PizzaList'
import { connect } from 'react-redux'

class PizzaListContainer extends React.Component {
    selectPizza = (id) => {
        console.log('selected pizza:', id)
        this.props.dispatch({
          type: 'SELECT_PIZZA',
          payload: id
        })
      }
  /*{BEFORE WE DISPATCH; above!, check we have access to it by looking in the redux tools}*/

  /*{Switch back to your app and open the Redux devtools, after adding this.props.distpatch, with select_pizza
    Click on a pizza name. 
    Does it dispatch an action and change the state of selectedPizza? 
    Make sure you only continue if this works}*/
  
  render() {
    return <PizzaList pizzas={this.props.pizzas} selectPizza={this.selectPizza} />
  }
} 
/*{above, line 10: we are rendering in the return statement, }*/

/*{
    Instead of using store.getState() like the simple redux example we will be using connect & mapStateToProps to access our state in our React components
    in the PizzaListContainer.js, as it is importing PizzaList from its js-file
}*/
/*{below line of code is changed from: pizzas: state to pizzas: state.pizzas
    due to us implementing a combineReducer instead of a single reducer
    
    NOW: in the redux tools, we have a new property pizzas, which is the home of the pizzas }*/

const mapStateToProps = (state) => {
  return {
    pizzas: state.pizzas
    /// I added state.pizzas --> because I added a selected-pizza as well, so state.pizzas instead of just pizzas
    /// The NAME OF THE root reducer --< will be the name of the state --> so therefore state.pizzas (!!)
  }
}


export default connect(mapStateToProps)(PizzaListContainer)