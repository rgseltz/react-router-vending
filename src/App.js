import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

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
