import React from "react";
import {Route, Link} from 'react-router-dom'
import VendingMachine from "./VendingMachine";
const Drink = () => {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1629186235045-80d4147d90dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                alt="sippy"/>
            
            
                    <Link exact to="/">Go Back</Link>
                    <Route exact path="/"><VendingMachine/></Route>
                
            
        </div>
    )
}
export default Drink;