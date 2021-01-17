import React, {useState} from "react";
import './components/estilos/estilos.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Instrumentos from './components/Instrumentos';
import Accesorios from './components/Accesorios';
import Home from './components/Home'


function App(){



    return(
        <BrowserRouter className="App">
            <Navbar />
           
            <Switch>
            
            
            <Route path="/" exact>
                <Home/>
                <ItemListContainer></ItemListContainer>
                <ItemDetailContainer></ItemDetailContainer>
            </Route>


            <Route  path="/instrumentos">
                <Instrumentos/>
            </Route>


            <Route  path="/accesorios">
                <Accesorios/>
            </Route>
            
            
            </Switch>
            
          
        </BrowserRouter>
    )

}

export default App