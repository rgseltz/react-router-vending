import React from "react";
import {Route, Link} from 'react-router-dom'
import VendingMachine from "./VendingMachine";
const Candy = () => {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="candy"/>
            
            
                    <Link exact to="/">Go Back</Link>
                    <Route exact path="/"><VendingMachine/></Route>
                
            
        </div>
    )
}
export default Candy;