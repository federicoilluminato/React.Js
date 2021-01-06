import React from 'react'
import Item from './Item'


function ItemList({list}){
    return list.map(i => <Item item={i}/>)
 
    }



export default ItemList;