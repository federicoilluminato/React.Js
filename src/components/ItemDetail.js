import React, {useEffect,useState,useContext} from 'react'
import Contador from './Contador'
import {Link,NavLink} from 'react-router-dom';
import {CartContext} from './CartContext';


const ItemDetail = ({item,}) => {

    const[condicionBoton,setCondicionBoton] = useState(true)
    const[show,setShow] = useState(false)

    const [cart,addItem,deleteItem] = useContext(CartContext);
    
    const onAdd = () => {
        
        console.log("agregado")
        const item = {name: item.title, price:item.price};
        addItem(curr => [...curr, item]);

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
        
             

            
            <Contador onAdd={onAdd} condicion={condicionBoton} item={item}/>

            {
            <Link to="/cart">
                {show && <button type="submit" className="btn-contador"><p>Terminar Compra</p></button>}
                    
            </Link> 
            }
            </div>
        </div>

    )
}

export default ItemDetail