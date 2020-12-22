import React, { Component } from 'react';


function Navbar (){
  return(
 

      <nav className="navbar">

      <div className="navbar-center">

              <span className="nav-icon">
                <i className="fas fa-bars"></i>
              </span>
              <img src="logo.png" alt=""></img>
              <div className="cart-btn">
                <span className="nav-icon">
                    <i className="fas fa-cart-plus"></i>  
                </span>
               <div className="cart-items">0</div>
              </div>

      </div>


      </nav>

  )
}

export default Navbar;