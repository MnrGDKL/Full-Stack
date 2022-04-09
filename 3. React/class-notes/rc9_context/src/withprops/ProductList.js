import React from 'react'
import Product from './Product';

const ProductList = ({products, increasePrice, decreasePrice}) => {
  return (
    <div>
      {products.map(product => (
        <Product key={product.id} 
                 product={product}
                 increasePrice={increasePrice}
                 decreasePrice={decreasePrice}/>
      ))}
    </div>
  )
}

export default ProductList