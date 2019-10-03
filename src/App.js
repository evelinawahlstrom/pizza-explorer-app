import React from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';
import PizzaDetailsContainer from './components/PizzaDetailsContainer';
import AddPizzaFormContainer from './components/AddPizzaFormContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <main><PizzaListContainer />
            <PizzaDetailsContainer />
            <AddPizzaFormContainer />
      </main>
      
      </header>
   
    </div>
  );
}

export default App;
