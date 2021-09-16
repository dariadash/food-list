import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Dishes } from './components/Dishes';
import { Navbar } from './components/Navbar';
import { Dish } from './interface';

function App() {
  const [dishes, setDishes] = React.useState<Dish[]>([])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar dishes={dishes} setDishes={setDishes}/>
        <Dishes dishes={dishes} setDishes={setDishes}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
