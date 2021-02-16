import React, { useContext } from 'react';
import ItemCount from './ItemCount';
import Spinner from 'react-bootstrap/Spinner';
// import CartContext from '../CartContext';


const ItemDetail = ({ item }) => {

    console.log(item);
    // const cart = useContext(CartContext);

    // list.map(i => <Item item={i}/>)

    return (
        // <div>
        //     <img src={item.photo} alt=""/>
        //     <h1>{item.title}</h1>
        //     <h1>{item.price}</h1>
        //     <p>{item.description}</p>
        //     <ItemCount />
        // </div>
            <div>
            {item.id ? 
                <div>
                <img src={item.photo} alt=""/>
                <h1>{item.title}</h1>
                <h1>${item.price}</h1>
                <p>{item.description}</p>
                <ItemCount item={item}/>
            </div> : 
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>}
            </div>


    )
}

export default ItemDetail
