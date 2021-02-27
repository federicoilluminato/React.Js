import React, { Fragment, useState,  } from 'react';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext, { Provider } from './CartContext';
import Cart from './components/Cart';
import Container from 'react-bootstrap/Container';





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
        <Container fluid>
            <CartContext.Provider value={data}>
            <BrowserRouter>


            <Navbar />
            <Switch>

            <Route exact path="/">
            <ItemListContainer
            greeting='Listado de Productos'
            />
            </Route>

            <Route exact path="/category/:categoryId">
            <ItemListContainer
            greeting='Listado de Productos'
            />
            </Route>

            <Route exact path="/category/:categoryId">
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
        </Container>
    )

}

export default App