import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';

const ItemCount = ({ item }) => {
    // console.log(item)
    
    const { cart } = useContext(CartContext);
    
    // console.log(cart)
    const [carrito, setCarrito] = useState(cart);
    const [total,setTotal] = useState(0);

    const addItem = () => {
        // console.log(`added ${contador} ${item.title}`);
        setCarrito(cart.push(item));
        setCondition(true);
        console.log(cart)
        if(contador >= 1){
            item.quantity = parseInt(`${contador}`);
            item.cartId = Math.random();
            console.log(cart);
        }
        setTotal(total+item.price * item.quantity)
    } 

    const [contador, setContador] = useState(0);
    const [condition, setCondition] = useState(false);
    const sumarContador = () => {
        if(contador < item.stock){
        setContador(contador+1)
        }
    }

    const restarContador = () => {
        if(contador > 0){
        setContador(contador-1)
        }
    }
    // const agregarCarrito = () => {
    //     console.log(`se agregaron ${contador} items`);
    //     setCondition(true);
    // }

    return ( 
        <div className="itemcount">
            <div>
                <div className="itemcount-count">
            <button onClick={sumarContador} className="btn-primary">+</button>
            <span>{contador}</span>
            <button onClick={restarContador} className="btn-primary">-</button>
                </div>
                <div className="agregar-carrito">
                    {condition ? <Link to="/cart"><button className="btn-primary">Terminar Compra</button></Link>
                :
                <button onClick={ addItem   } className="btn-primary">Agregar al carrito</button>
                } 
            
                </div>
            </div>
        </div>
     );
}
 
export default ItemCount;