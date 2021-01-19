import { render } from '@testing-library/react';
import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import Contador from './Contador'
import ItemList from './ItemList'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'



function ItemListContainer ({}){


  const PRODUCTS = [
    {id: 1, title: 'Guitarra Fender Stratocaster', photo: image1, price:'$2500', categoryId: 'instrumentos'},
    {id: 2, title: 'Guitarra Gibson Les Paul', photo: image2, price:'$2900', categoryId: 'instrumentos'},
    {id: 3, title: 'Afinador de Guitarra', photo: image3, price:'$150', categoryId: 'accesorios'},
    {id: 4, title: 'Correa de Guitarra', photo: image4, price:'$300', categoryId: 'accesorios'},
  ]

  const [list,setList] = useState([])
  const { id } = useParams()
  


  useEffect(()=>{
    getProducts.then((res)=>setList(res))
    getProducts.catch(err => console.log("algo salio mal"))
}, [])


const getProducts = new Promise((res, rej) => {
   setTimeout(()=>{
       res(PRODUCTS)
   }, 2000)
})
  
useEffect(()=>{
  // getProducts.then((res)=>setList(res))
  // getProducts.catch(err => console.log("algo salio mal"))
  const filteredItems = list.filter(p => p.categoryId == id);
     setList(filteredItems);
  }, [id])

    return(
    
    <div>
    <h1>Listado de Productos</h1>
    
    <div className="itemContainer-grid">
       {/* {list.lenght > 1 ? <ItemList list={list}/> : <h2>Loading...</h2>} */}
      <ItemList  list={list}></ItemList>  
    </div>
    
    
    </div>
    
    )
  }

  
  export default ItemListContainer;
