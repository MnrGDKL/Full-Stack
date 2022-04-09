import React, {useContext} from 'react'
import { ProductContext } from './ProductContext'
const Product = ({product}) => {
  const {increasePrice, decreasePrice} = useContext(ProductContext);

  return (
    <div>
      <h2> {product.product}</h2>
      <p> {product.price} $</p>
      <button id={product.id} 
              onClick={increasePrice}>
        Increase
      </button>
      
      <button id={product.id} 
              onClick={decreasePrice}>
        Decrease
      </button>
    </div>
  )
}

export default Product