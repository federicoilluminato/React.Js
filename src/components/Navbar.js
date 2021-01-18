import React, { Component } from 'react';
import CartWidget from './CartWidget';
import {Link,NavLink} from 'react-router-dom';


function Navbar (){
  return(
 

      <nav className="navbar">


          <ul className="navbar-links">
            <li className="navbar-links-li">
          <NavLink to="/categories/instrumentos">Instrumentos</NavLink>
            </li>
            <li className="navbar-links-li">
          <NavLink to="/categories/accesorios">Accesorios</NavLink>
          </li>
          </ul>

          <NavLink className="navbar-logo" to="/">Instrumentos React</NavLink>

          <i class="fas fa-shopping-cart">
          <CartWidget></CartWidget>
          </i>
          

      </nav>

  )
}


export default Navbar;
