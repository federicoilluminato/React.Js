import React, { Component } from 'react';
import CartWidget from './CartWidget'


function Navbar (){
  return(
 

      <nav className="navbar">

      <div className="navbar-center">

              <span className="nav-icon">
                <i className="fas fa-bars"></i>
              </span>
              <img src="logo.png" alt=""></img>
              <div className="cart-btn">
                  <CartWidget></CartWidget>
               <div className="cart-items">0</div>
              </div>

      </div>


      </nav>

  )
}


export default Navbar;
