import React, { useContext, useState }from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';
import CartItem from './CartItem';
import firebase from 'firebase';
import { firestore } from '../firebaseConfig';

const Cart = () => {

    const { cart } = useContext(CartContext);
    

    //estados de form
    const [nombre,setNombre] = useState("");
    const [telefono,setTelefono] = useState("");
    const [email,setEmail] = useState("");

    //id compra
    const [id,setId] = useState("");
    

    console.log(cart);

    const Compra = (e) => {
        e.preventDefault()
        const orden = {
            buyer : {nombre,telefono,email},
            items : cart,
            date : firebase.firestore.Timestamp.fromDate(new Date()) ,
            total : 'pendiente...',
        }
        console.log(orden);

        const db = firestore;
        const collection = db.collection("orders");
        collection
        .add(orden)
        .then((response)=>{
            console.log(response);
            setId(response.id)
            const collection = db.collection("products");
            const bache = firestore.batch()

            cart.forEach(item=>{
                console.log(item);

                bache.update(collection.doc(item.id),{stock: item.stock - item.quantity})

                // collection.doc(item.id).update({stock: item.stock - item.quantity})
                // .then(()=>{
                //     console.log('se actualizo el producto');
                // })

            } )
            bache.commit()
            .then(()=> {
                console.log('ok');
            })
        })
        .catch((error)=>{
            console.log(error);
        })


    }

    


    return (
        <Container fluid className="cart-container">
            <h2>Carrito</h2>
            {id? <p className="numero-orden">Orden confirmada! Nro de orden: {id}</p> : null}
            {cart.length > 0 ?
            cart.map(item => <CartItem key={Math.random()}
            item={item}
            >
               

            </CartItem>)
             : 
            <div>
                <h1>No hay items, <Link to="/">volver</Link> </h1>
            </div>
            }

            {cart.length > 0 ?
            <div>
                            <h2>Datos de compra</h2>
                            <form onSubmit={Compra}>
                                <div>
                                    <input onChange={e=>setNombre(e.target.value)} type="text" placeholder="nombre" value={nombre}/>
                                </div>
                                <div>
                                    <input onChange={e=>setTelefono(e.target.value)} type="tel" placeholder="telefono" value={telefono}/>
                                </div>
                                <div>
                                    <input onChange={e=>setEmail(e.target.value)} type="email" placeholder="email" value={email} />
                                </div>
                                        <button className="btn-primary">Comprar</button>
                                </form>
            </div>
                                :
                                null

            
            }

            


        </Container>
    )
}

export default Cart
