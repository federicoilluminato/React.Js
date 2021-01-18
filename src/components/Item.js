import React , {useEffect,useState} from 'react';

function Item ({item}){

    

   


    return(
        <div className="itemContainer">
                <h2>{item.title}</h2>
                <img src={item.photo} className="card-img"></img>
                <p>{item.price}</p>
                <button className="card-btn">Ver Más</button>


        </div>
    )
}


export default Item;