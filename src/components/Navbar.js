import React, {useContext , useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom';
import CartContext from '../CartContext';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    const [cartCantidad, setCartCantidad] = useState(0);
    
    console.log(cart.length)
    
    useEffect(() => {
        if(cart.length > 0){
        setCartCantidad(cart.length)
    }})
    

    return (
    <header>
    <nav className="navbar">
            <NavLink to="/"className="logo">Tienda React</NavLink>
        <ul className="navbar-ul">
            {/* <li><NavLink  to="/productos">Productos</NavLink></li> */}
            <li><NavLink  to="/category/accesorios">Accesorios</NavLink></li>
            <li><NavLink  to="/category/instrumentos">Instrumentos</NavLink></li>
         </ul>
            <Link to="/cart"><i className="cartwidget"><CartWidget /><p className="cart-quantity">{cart.length}</p></i></Link>
    </nav>
    </header> 

     );
}
 
export default Navbar;