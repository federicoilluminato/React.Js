import { render } from '@testing-library/react';
import React, { useEffect , useState } from 'react';
import Contador from './Contador'
import ItemList from './ItemList'



function ItemListContainer (){

  const onAdd = () => {
    console.log("agregado")
  }

  const [list,setList] = useState([])


  useEffect(()=>{
    getProducts.then((res)=>setList(res))
 }, [])

const PRODUCTS = [
  {id: 1, title: 'Remera Penguin', photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA235WZNC63lGmmhLinWtzAnTAJYjuoKKXjA&usqp=CAU', price:'$2500'},
  {id: 2, title: 'Producto 2'},
  {id: 3, title: 'Producto 3'},
  {id: 4, title: 'Producto 4'},
]
const getProducts = new Promise((res, rej) => {
   setTimeout(()=>{
       res(PRODUCTS)
   }, 2000)
})
  
    return(
    
    <div>
    <h1>Listado de Productos</h1>
    
    <ItemList  list={list}></ItemList>
    <Contador onAdd={onAdd}/>
    
    </div>
    
    )
  }

  
  export default ItemListContainer;
