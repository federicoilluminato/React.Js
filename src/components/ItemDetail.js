import React from 'react'
import Contador from './Contador'

const ItemDetail = ({item}) => {

    const onAdd = () => {
        console.log("agregado")
      }



    return (
        <div>
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictures[0]}></img>
            <p>
                <strong>Garantia :</strong><br/>
                {item.warranty}
            </p>
            <Contador onAdd={onAdd}/>

        </div>
    )
}

export default ItemDetail