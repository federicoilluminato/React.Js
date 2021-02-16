import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



const ItemListContainer = ({greeting}) => {
   
    const PRODUCTS = [
        {id: 1, title: 'Guitarra Fender Stratocaster', photo: image1, price:'$2500', categoryId: 'instrumentos'},
        {id: 2, title: 'Guitarra Gibson Les Paul', photo: image2, price:'$2900', categoryId: 'instrumentos'},
        {id: 3, title: 'Afinador de Guitarra', photo: image3, price:'$150', categoryId: 'accesorios'},
        {id: 4, title: 'Correa de Guitarra', photo: image4, price:'$300', categoryId: 'accesorios'},
      ]

    const [list,setList] = useState([]);
    const {categoryId} = useParams();
    
    useEffect(()=> {

        
        let getProducts = new Promise((res,rej)=>{
        setTimeout(()=>{
                    res(PRODUCTS);
                    rej();
                 }, 2000)
             });
            
        getProducts.then((res) =>setList(res))
        getProducts.catch((err)=> {
        console.log('error');
         })

    },[]);
     

   
    return ( 
        <Container fluid className="itemlist-container">
            
            <Row className="itemlist-container-title"><h1>{greeting}</h1></Row>
            <Row className="itemlist-container-row">
            {list.length > 1 ? 
            <ItemList 
            list={list}/> : 
            <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>}
            
            </Row>
            
        </Container>
     );
}
 
export default ItemListContainer;