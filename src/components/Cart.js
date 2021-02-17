import React, { useContext }from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import CartItem from './CartItem';

const Cart = () => {

    const { cart } = useContext(CartContext);
    
    console.log(cart);

    


    return (
        <Container fluid className="cart-container">
            
            {cart.length > 0 ?
            cart.map(item => <CartItem key={Math.random()}
            item={item}
            >
               

            </CartItem>) : 
            <div>
                <h1>No hay items, <Link to="/">volver</Link> </h1>
            </div>
            }

        </Container>
    )
}

export default Cart
