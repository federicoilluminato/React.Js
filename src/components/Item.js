import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const Item = ({item}) => {
    return ( 
        <div>

            {/* <h2>{item.title}</h2>
            <p>{item.price}</p>
            <img src={item.photo} alt=""/>
            <button className="btn-primary">
                Ver Más
            </button>
            <ItemCount /> */}

            <Card style={{ width: '18rem' }} className="item-card">
            <Card.Img variant="top" className="img-card img-fluid" src={item.photo} />
            <Card.Body>
            <Card.Title className="item-card-title">{item.title}</Card.Title>
            <Card.Title>{item.price}</Card.Title>
            <Link to={`/item/${item.id}`}><Button variant="primary">Ver más</Button></Link>
            </Card.Body>
            </Card>

            
        </div>

     );
}
 
export default Item;