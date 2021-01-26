import React, {useState} from 'react'

export const CartContext = React.createContext ();

export const CartProvider = (props) => {

    const [cart, addItem, deleteItem] = useState([]);

    return (

        <CartContext.Provider value={[cart, addItem, deleteItem]}>
            
        {props.children}

        </CartContext.Provider>

    )
}