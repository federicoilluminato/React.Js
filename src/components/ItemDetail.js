import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <div>
            <h3>{item.title} - ${item.price}</h3>
            <img src={item.pictures[0]}></img>
            <p>
                <strong>Garantia :</strong><br/>
                {item.warranty}
            </p>

        </div>
    )
}

export default ItemDetail