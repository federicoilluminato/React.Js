import React, {useContext} from 'react';
import {CartContext} from './CartContext';

const Cart = () => {

    const [cart,addItem,deleteItem] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0 );
    
    return (

            <div className='cart-display'>

                    <div className='cart-display-tab'>  
                  

                    <p>items in cart : {cart.length}</p>
                    
                    <p>total : {totalPrice}</p>
                    
                    
                    </div>
            </div>

    )
    



}

export default Cart;
