import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar= () => {
    return (
        <nav className='Navbar'>
            <NavLink exact to="/">Vending Machine</NavLink>
            <NavLink exact to="/chips">Chips</NavLink>
            <NavLink exact to="/candy">Candy</NavLink>
            <NavLink exact to="/drink">Drink</NavLink>
        </nav>
    )

}
export default Navbar;