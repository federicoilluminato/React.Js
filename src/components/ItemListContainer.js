import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { firestore } from "../firebaseConfig"



const ItemListContainer = ({greeting}) => {

    const [list,setList] = useState([]);
    const {categoryId} = useParams();
    console.log(categoryId);

    useEffect(() => {

        const db = firestore
        const collection = db.collection("products")
        const query = collection.get()

        query.then((resultado)=>{
            
            // const items_array = resultado.docs 
            const nuevosProductos = [];
            resultado.docs.forEach(item=>{
                nuevosProductos.push({id:item.id,...item.data()})
                })
                if(categoryId){
                setList(nuevosProductos.filter(item=> item.categoryId == categoryId))
                }else{
                setList(nuevosProductos)    
                }
                
            })
            .catch(()=>{
            console.log('error');
        })
    },[categoryId])

    console.log(list);

     

   
    return ( 
        <Container fluid className="itemlist-container">
            
            <Row className="itemlist-container-title greeting"><h1>{greeting}</h1></Row>
            <Row className="itemlist-container-row">
            {list.length > 1 ? 
            <ItemList 
            list={list}/> : 
            <Spinner className="spinner" animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>}
            
            </Row>
            
        </Container>
     );
}
 
export default ItemListContainer;