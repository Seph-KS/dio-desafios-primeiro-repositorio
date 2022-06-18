import {useState} from 'react';

function SmartCounter(){
    const [quantity, changeQuantity] = useState(1);

    return (
        <>
            <h1>{quantity}</h1>
            <button onClick={()=> changeQuantity(quantity +1)}>Aumentar</button>
            <button onClick={()=> changeQuantity(quantity -1)}>Diminuir</button>
        </>
    )
}

export default SmartCounter;