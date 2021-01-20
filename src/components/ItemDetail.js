import React, {useEffect,useState} from 'react'
import Contador from './Contador'
import {Link,NavLink} from 'react-router-dom';

const ItemDetail = ({item,}) => {

    const[condicionBoton,setCondicionBoton] = useState(true)

    const onAdd = () => {
        console.log("agregado")

        setCondicionBoton(false)
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
        
             

            
            <Contador onAdd={onAdd}/>

            {
            <Link to="/cart">
                    <button type="submit">Comprar</button>
            </Link> 
            }


                
             
            
                
    

        </div>
        </div>

    )
}

export default ItemDetail