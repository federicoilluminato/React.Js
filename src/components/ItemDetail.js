import React, {useEffect,useState} from 'react'
import Contador from './Contador'
import {Link,NavLink} from 'react-router-dom';

const ItemDetail = ({item,}) => {

    const[condicionBoton,setCondicionBoton] = useState(true)
    const[show,setShow] = useState(false)
    const onAdd = () => {
        
        console.log("agregado")
        setCondicionBoton(false)
        setShow(true)
      }




    return (

        <div className="container-description">
            <div className="itemContainer-description">

                <img src={item.photo} className="card-img"></img>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-price">{item.price}</p>
                <p>
                    Descripción
                </p>
        
             

            
            <Contador onAdd={onAdd} condicion={condicionBoton}/>

            {
            <Link to="/cart">
                {show && <button type="submit">Terminar Compra</button>}
                    
            </Link> 
            }
            </div>
        </div>

    )
}

export default ItemDetail