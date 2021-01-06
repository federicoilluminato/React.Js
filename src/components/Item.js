import React , {useEffect,useState} from 'react';

function Item ({item}){

    

   


    return(
        <div>
                <p>{item.title}</p>
                <img src={item.photo}></img>
                <p>{item.price}</p>


        </div>
    )
}


export default Item;