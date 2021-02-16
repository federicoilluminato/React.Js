import React from 'react';
import Item from './Item';

const ItemList = ({list}) => {

    console.log(list);


    return ( 
        
        list.map(i => <Item item={i} key={i.id}/>)

     );
}
 
export default ItemList;