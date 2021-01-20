import React , { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'

const PRODUCTS = [
    {id: 1, title: 'Guitarra Fender Stratocaster', photo: image1, price:'$2500', categoryId: 'instrumentos'},
    {id: 2, title: 'Guitarra Gibson Les Paul', photo: image2, price:'$2900', categoryId: 'instrumentos'},
    {id: 3, title: 'Afinador de Guitarra', photo: image3, price:'$150', categoryId: 'accesorios'},
    {id: 4, title: 'Correa de Guitarra', photo: image4, price:'$300', categoryId: 'accesorios'},
  ]


const ItemDetailContainer = () => {

    const [item,setItem] = useState()
    const {id} = useParams();

    useEffect(()=> {
        let pedido = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(PRODUCTS)
            },2000)
        })
        pedido
        .then(res=>{
            if(id){
                setItem(res.filter(item=>item.id==id)[0])
            }
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])


return (
    <div>
        {item
        ? <ItemDetail item={item}/> 
        : <p>Cargando...</p>}
    </div>
    )
}

export default ItemDetailContainer;
