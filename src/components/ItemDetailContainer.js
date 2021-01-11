import React , { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

const [item,setItem] = useState()

useEffect (()=>{

    let pedido = new Promise((res,rej)=>{
        setTimeout(()=>{
            res({
                id: "asd23432",
                title: "Remera Nike",
                price: 2200,
                warranty: "Garantia de fabrica: 30 dias",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti esse dolorum velit, repellendus magnam, dicta in amet atque ab eos numquam neque maiores, asperiores natus nihil molestiae quaerat excepturi eius.",
                pictures : [
                            "data:image/jpeg;base64,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"
                ]
            })
        },2000)
    })

    pedido
    .then(res=>{
        setItem(res)
    })
    .catch(err=>{
        console.log(err)
    })
},[])

return (
    <div>
        {item
        ? <ItemDetail item={item}/> 
        : <p>Cargando...</p>}
    </div>
)



}

export default ItemDetailContainer;
