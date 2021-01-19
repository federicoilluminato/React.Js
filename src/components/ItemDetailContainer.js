import React , { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

const { id } = useParams();
const [item,setItem] = useState()



return (
    <div>
        {item
        ? <ItemDetail item={item}/> 
        : <p>Cargando...</p>}
    </div>
)



}

export default ItemDetailContainer;
