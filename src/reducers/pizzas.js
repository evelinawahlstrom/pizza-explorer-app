const initialState = [
  {
    id: 1,
    name: 'Pizza Margarita',
    description: 'Minimalism is key!',
    ingredients: [
      'tomato',
      'mozarella',
      'basil'
    ]
  },
  {
    id: 2,
    name: 'Pizza Napoletana',
    description: 'Like Margarita, but without the basil.',
    ingredients: [
      'tomato',
      'mozarella'
    ]
  },
  {
    id: 3,
    name: 'Pizza Bianca',
    description: 'Did somebody say oil?',
    ingredients: [
      'olive oil',
      'salt',
      'rosemary'
    ]
  }
]


const reducer = (state = initialState, action = {}) => {
  console.log(state, action)
    switch (action.type) {
    //case "1": return state
    case "ADD_PIZZA": 
      return [
        ...state, 
        {...action.payload}
      ]
    default:
      return state
    }
  }



  /*{✍️ Change your reducer to use the above initial state 🔍 Check Redux devtools to see if your state contains some pizzas
   --> now we are setting the reducer to return state in case 1, which in the const reducer: state = initialState now!
  --> if you check the redux tools, you can see that state is three different pizzas}*/



  /*{Later step below, the case ADD_PIZZA: After Add Pizza form has been created, we do:
    
    Adjust your pizzas reducer so that it will add the pizza (action.payload) to the state (which is an array) when the ADD_PIZZA action comes along. 
    
    --> Check the 'Array reducer' chapter from this morning if you forgot how you can add an element to an array without mutability (hint: don't use push)}*/


    /*{
    Only change this part:
        case "ADD_PIZZA": 
      return [
        ...state, 
        {...action.payload}
      ]
    default:
      return state
      
      we don't need to dispatch again, as we've already declared a function that dispatches in the PizzaListContainer:
        
  class PizzaListContainer extends React.Component {
    selectPizza = (id) => {
        console.log('selected pizza:', id)
        this.props.dispatch({
          type: 'SELECT_PIZZA',
          payload: id
        })
      }

      that's why we don't need to dispatch again
       - MAGIC THAT REDUX TAKE CARE OF FOR US!
    
    }*/

  
  export default reducer