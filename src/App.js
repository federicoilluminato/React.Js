import React, {useState} from "react";
import './components/estilos/estilos.css';
import Navbar from './components/Navbar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";


function App(){



    return(
        <div className="App">
            <Navbar />
            <ItemListContainer/>
            <ItemDetailContainer></ItemDetailContainer>
            
          
        </div>
    )

}

export default App