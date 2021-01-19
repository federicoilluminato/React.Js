import React , {useEffect,useState} from 'react';

function Item ({item}){

    

   


    return(
        <div className="itemContainer">
                
                <img src={item.photo} className="card-img"></img>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-price">{item.price}</p>
                <button className="card-btn">
            
                Ver Más
                
                </button>


        </div>
    )
}


export default Item;