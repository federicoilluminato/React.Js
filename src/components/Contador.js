import React , {useState} from 'react';

const Contador = () => {
    
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
        <div>
                        <p>El contandor va : {contador}</p>
            <button onClick={ aumentarContador }>+</button>
            <button onClick={ restarContador }>-</button>
            <button onClick={ resetearContador }>reset</button>
        </div>
    )
}

export default Contador;