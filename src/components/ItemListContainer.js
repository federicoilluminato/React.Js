import { render } from '@testing-library/react';
import React, { useEffect , useState } from 'react';
import { useParams } from 'react-router-dom';
import Contador from './Contador'
import ItemList from './ItemList'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'



function ItemListContainer (){

  const onAdd = () => {
    console.log("agregado")
  }

  const [list,setList] = useState([])


  useEffect(()=>{
    getProducts.then((res)=>setList(res))
 }, [])

const PRODUCTS = [
  {id: 1, title: 'Guitarra Fender Stratocaster', photo: image1, price:'$2500', category: 'instrumentos'},
  {id: 2, title: 'Guitarra Gibson Les Paul', photo: image2, price:'$2900', category: 'instrumentos'},
  {id: 3, title: 'Afinador de Guitarra', photo: image3, price:'$150', category: 'accesorios'},
  {id: 4, title: 'Correa de Guitarra', photo: image4, price:'$300', category: 'accesorios'},
]
const getProducts = new Promise((res, rej) => {
   setTimeout(()=>{
       res(PRODUCTS)
   }, 2000)
})

    const [ items, setItems ] = useState([])
    const { id } = useParams()

    useEffect(() => {
      if (id){
        const category = PRODUCTS.filter(product =>product.categoryId == id)
        setItems(category)
      }else{
        setItems(PRODUCTS)
      }
    }, [id, PRODUCTS])
  
    return(
    
    <div>
    <h1>Listado de Productos</h1>
    
    <div className="itemContainer-grid">
    <ItemList  list={list}></ItemList>
    </div>
    <Contador onAdd={onAdd}/>
    
    </div>
    
    )
  }

  
  export default ItemListContainer;
