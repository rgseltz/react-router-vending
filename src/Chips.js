import React from "react";
import {Route, Link} from 'react-router-dom'
import VendingMachine from "./VendingMachine";
const Chips = () => {
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=769&q=80"
                alt="potato chips"/>
            
            
                    <Link exact to="/">Go Back</Link>
                    <Route exact path="/"><VendingMachine/></Route>
                
            
        </div>
    )
}
export default Chips;