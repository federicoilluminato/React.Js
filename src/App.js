import React, {useState} from "react";
import './components/estilos/estilos.css'


import Navbar from './components/Navbar'
import ItemListContainer from "./components/ItemListContainer";
import Contador from './components/Contador'

function App(){



    return(
        <div className="App">
            <Navbar />
            <ItemListContainer/>
            <Contador/>
          
        </div>
    )

}

export default App