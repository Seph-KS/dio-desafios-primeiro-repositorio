import React, {useState, useEffect} from 'react'
import '../IfoodCounter/IfoodCounter.css'

export default function IfoodCounter() {

  const [value, setValue] = useState(1)
  const [buttonStyle, setButtonStyle] = useState('counter-button-minus-enabled')
  const [total, setTotal] = useState(0)
  var preco = 5.75

  useEffect(()=>{
    setTotal(preco * value)
  },[value])

  function minus(){

    if (value <= 1){
      setButtonStyle('counter-button-minus-disabled')
    }

    if(value > 0){
      setValue(value-1)
    }
  }

  function plus(){

    if(value === 0) {
      setButtonStyle('counter-button-minus-enabled')
    }

    setValue(value+1)
  }

  return (
    <div  className="counter-wrappper">
      <button className={buttonStyle} onClick={minus}>
        -
      </button>
      <p>{value}</p>
      <button className='counter-button-plus-enabled' onClick={plus}>
        +
      </button>
      <button id='total'>Total: R${total}</button>
    </div>
  )
}
