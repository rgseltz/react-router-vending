import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Drink from './Drink';
import Candy from './Candy';
import './App.css';
import './Navbar.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Route exact path="/"><VendingMachine/></Route>
      <Route exact path="/chips"><Chips/></Route>
      <Route exact path="/drink"><Drink/></Route>
      <Route exact path="/candy"><Candy/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
