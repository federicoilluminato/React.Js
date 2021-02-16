import React , { useState , useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'

const ItemDetailContainer = () => {

    const PRODUCTS = [
        {id: 1, title: 'Guitarra Fender Stratocaster', photo: image1, price:2500, categoryId: 'instrumentos', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia integer, feugiat nec viverra in lacinia egestas non augue fusce, volutpat cubilia cum netus facilisis consequat ornare suscipit. Convallis bibendum commodo lectus facilisis nisl habitasse eget, potenti eleifend'},
        {id: 2, title: 'Guitarra Gibson Les Paul', photo: image2, price:2900, categoryId: 'instrumentos', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia integer, feugiat nec viverra in lacinia egestas non augue fusce, volutpat cubilia cum netus facilisis consequat ornare suscipit. Convallis bibendum commodo lectus facilisis nisl habitasse eget, potenti eleifend'},
        {id: 3, title: 'Afinador de Guitarra', photo: image3, price:150, categoryId: 'accesorios', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia integer, feugiat nec viverra in lacinia egestas non augue fusce, volutpat cubilia cum netus facilisis consequat ornare suscipit. Convallis bibendum commodo lectus facilisis nisl habitasse eget, potenti eleifend'},
        {id: 4, title: 'Correa de Guitarra', photo: image4, price:300, categoryId: 'accesorios', description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit conubia integer, feugiat nec viverra in lacinia egestas non augue fusce, volutpat cubilia cum netus facilisis consequat ornare suscipit. Convallis bibendum commodo lectus facilisis nisl habitasse eget, potenti eleifend'},
      ]

    const [item,setItem] = useState([]);
    const {id} = useParams();
    
    useEffect(()=> {


        let getProducts = new Promise((res,rej)=>{
        setTimeout(()=>{
                    res(PRODUCTS);
                    rej();
                 }, 2000)
             });
            
        getProducts.then((res) =>{if(id){
            setItem(res.filter(item=>item.id==id)[0])  
        }})
        getProducts.catch((err)=> {
        console.log('error');
         })

    },[]);



    return (
        <Container fluid>
            <ItemDetail 
            item={item}
            />
        </Container>
    )
}

export default ItemDetailContainer;
