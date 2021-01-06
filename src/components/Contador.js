import React , {useState} from 'react';

const Contador = ({onAdd}) => {
    
    const [contador,setContador] = useState(0)

    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const restarContador = () => {
        setContador(contador - 1)
    } 
    const resetearContador = () => {
            setContador(0)
    }

    
    
    
    return (
        <div className="contador-container">
            <p>Nombre del producto</p>
                <div className="itemcount">
            <button disabled={contador >= 10}onClick={ aumentarContador }>+</button>
                                <p>{contador}</p>
            <button disabled={contador <= 0}onClick={ restarContador }>-</button>
                </div>
            <br></br>
            <button className="btn-contador"onClick={ resetearContador }>Reset</button>
            <br></br>
            <button className="btn-contador" onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}


export default Contador;