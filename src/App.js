import React, { Fragment, useState,  } from 'react';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext, { Provider } from './CartContext';
import Cart from './components/Cart';






const App = () => {
    const cart = []
    const data = { cart };
    
    // const [carrito, setCarrito] = useState(cart);

    // const addItem = (product) => {
    //     // cart.push(...product)
    // }
    // const removeItem = (product, id) => {
    //     // const id = item.id
    //     // cart.filter(item.id !== id)
    // }



    console.log(cart);

    return(
        <Fragment>
            <CartContext.Provider value={data}>
            <BrowserRouter>


            <Navbar />
            <Switch>

            <Route exact path="/">
            <ItemListContainer
            greeting='Listado de Productos'
            />
            </Route>

            <Route exact path="/category/accesorios">
            <ItemListContainer
            greeting='Listado de Productos'
            />
            </Route>

            <Route exact path="/category/instrumentos">
            <ItemListContainer
            greeting='Listado de Productos'
            />
            </Route>

            <Route exact path="/item/:id">
            <ItemDetailContainer
            greeting='Listado de Productos'
            />
            </Route>

            <Route exact path="/cart">
            <Cart

            />
            </Route>




            </Switch>
            </BrowserRouter>
            </CartContext.Provider>
        </Fragment>
    )

}

export default App