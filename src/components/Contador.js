import React , {useState} from 'react';

const Contador = ({stock, initial, onAdd, condicion}) => {
    
    const [contador,setContador] = useState(initial)

    const aumentarContador = () => {
        if(contador < stock){
            setContador(contador+1)
        }
    }
    const restarContador = () => {
        if(contador > 1){
            setContador(contador-1)
        }
    } 
    const resetearContador = () => {
            setContador(0)
    }
    const agregarCarrito = () => {
            onAdd(contador)
    }

    
    
    
    return (
        <div className="contador-container">
            
                <div className="itemcount">
            <button disabled={contador >= 10}onClick={ aumentarContador }>+</button>
                                <p>{contador}</p>
            <button disabled={contador <= 0}onClick={ restarContador }>-</button>
                </div>
            <br></br>
            <button className="btn-contador"onClick={ resetearContador }>Reset</button>
            <br></br>
            
            {condicion ? <button className="btn-contador" onClick={agregarCarrito}>Agregar al carrito</button> : null}
        </div>
    )
}


export default Contador;