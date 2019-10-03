import React from 'react'

export default function PizzaList(props) {
  return (<div>
    <h1>Pizza Explorer</h1>
    <ul>
      { props.pizzas.map(pizza =>
        <li key={pizza.id} onClick={() => props.selectPizza(pizza.id)}>
          { pizza.name }
        </li>
      ) }
    </ul>
  </div>)
}

/*{above we are mapping over an array of pizzas (states) to a new array of pizzas (props),
where the function of the click on the key pizza.id --> gives If you click on a Pizza and you open the console you'll see the ID printed of the pizza you clicked.

for this we need to connect, to access our props pizzas in this syntax above, we use mapStateToProps which maps a state of pizzas to props of pizzas}*/


/*{From the reader:

    We define a function mapStateToProps that defines what part of the state (from the redux store) is required as data in this component

    This part of the state is passed to the component as props (the pizzas can be accessed in the component as this.props.pizzas in this case)

    connect will call the mapStateToProps after an action has been dispatched and handled by the reducers (like store.subscribe)
    It will call it with state as an argument
    If the part of the state we need in this component has changed, it will be passed as new props to the component.

        The new props will trigger a render to be called, updating our component}*/