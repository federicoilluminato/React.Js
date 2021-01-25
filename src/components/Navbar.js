import React, { Component } from 'react';
import CartWidget from './CartWidget';
import {Link,NavLink} from 'react-router-dom';


function Navbar (){
  
  const categories = [
    {
      categoryId:"instrumentos",
      name:"Instrumentos",
    },
    {
      categoryId:"accesorios",
      name:"Accesorios",
    }

  ]

  const toggle = () => {
    console.log('mostrar/ocultar')
  }
  
  
  return(
 


      <nav className="navbar">


          <ul className="navbar-links">

            <li>
            
            {categories.map (category => 
          <NavLink to={`/categories/${category.categoryId}`} className="navbar-links-li" >{category.name}</NavLink>)}
           
            </li>
          </ul>

          <NavLink className="navbar-logo" to="/">React Music</NavLink>

          <i class="fas fa-shopping-cart" onClick={toggle}>
          <CartWidget></CartWidget>
          </i>

          

      </nav>

  )
}


export default Navbar;
