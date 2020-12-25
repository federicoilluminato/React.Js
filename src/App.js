import React from "react";
import './components/estilos/estilos.css'


import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer";


function App(){
    return(
        <div className="App">
            <Navbar />
            <ItemListContainer/>
          
        </div>
    )

}

export default App