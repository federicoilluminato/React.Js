import React, {useState,useEffect} from "react";
import './components/estilos/estilos.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Instrumentos from './components/Instrumentos';
import Accesorios from './components/Accesorios';
import Home from './components/Home';
import {CartProvider} from './components/CartContext';
import Cart from './components/Cart';


const App = () => {

    

    return(
        <CartProvider>
        <BrowserRouter className="App">
            <Navbar />  
            <Cart></Cart>
           
            <Switch>
            
            
            <Route path="/" exact>
                <Home/>
                <ItemListContainer></ItemListContainer>
                
            </Route>

            <Route path="/item/:id" exact>
                <ItemDetailContainer></ItemDetailContainer>
            </Route>


            <Route  path="/categories/:id">
                <ItemListContainer></ItemListContainer>
            </Route>

          
            
            </Switch>
            
          
        </BrowserRouter>
        </CartProvider>



    )

}

export default App