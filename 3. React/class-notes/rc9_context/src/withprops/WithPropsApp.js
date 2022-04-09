import React, { useState } from 'react';
import ProductList from './ProductList';

const initialProducts = [
  {id:1, product:"Basketball", price: 10},
  {id:2, product:"Baseball", price: 12},
  {id:3, product:"Tennis Racquet", price: 15},
]


const WithPropsApp = () => {
  const [products, setProducts] = useState(initialProducts)

  const increasePrice  = (e) => {
    const newProducts = [...products];
    newProducts[e.target.id-1].price += 1;
    setProducts(newProducts);
  }
  const decreasePrice  = (e) => {
    const newProducts = [...products];
    newProducts[e.target.id-1].price -= 1;
    setProducts(newProducts);
  }

  return (
    <div>
      <h3>WithPropsApp </h3>
      <ProductList products = {products}
                  increasePrice={increasePrice}
                  decreasePrice={decreasePrice}/>
    </div>
  )
}

export default WithPropsApp