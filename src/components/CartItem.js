import React, { useContext, useState }from 'react';
import CartContext from '../CartContext';

const CartItem = ({ item }) => {

    const { cart } = useContext(CartContext);
    const [carrito, setCarrito] = useState(cart);


    console.log(cart)
    const deleteItem = () =>{
        setCarrito(cart.filter(i => item.cartId !== item.cartId))
        console.log(item.cartId)
    }
    

    return (
        <div className="cart-item">
            
                <p>x{item.quantity}</p>
                <p>{item.title}</p>
                <img src={item.photo}></img>
                <span>${item.price * item.quantity}</span>
                <p>{}</p>
                <button className="btn-primary" onClick={deleteItem}>Eliminar</button>

        </div>
    )
}

export default CartItem
