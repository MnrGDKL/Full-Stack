import React from 'react'

const Product = ({product:p, increasePrice, decreasePrice}) => {
  return (
    <div>
      <h3>{p.product}</h3>
      <p>{p.price} $</p>
      <button id={p.id}
              onClick={increasePrice}>
              
              Increase
      
      </button>
      <button id={p.id}
              onClick={decreasePrice}>
              
              Decrease
      
      </button>
    </div>
  )
}

export default Product