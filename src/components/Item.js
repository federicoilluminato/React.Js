import React , {useEffect,useState} from 'react';
import { NavLink } from 'react-router-dom';

function Item ({item}){

    

   


    return(
        <div className="itemContainer">
                
                <img src={item.photo} className="card-img"></img>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-price">{item.price}</p>
                <button className="card-btn">
            
                <NavLink to={`/item/${item.id}`}>Ver Más</NavLink>
                
                </button>


        </div>
    )
}


export default Item;