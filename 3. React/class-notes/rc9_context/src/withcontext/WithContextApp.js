import React from 'react'
import ProductList from './ProductList'
import { ProductProvider } from './ProductContext';

const WithContextApp = () => {
  return (
    <ProductProvider>
      <ProductList/>
    </ProductProvider>
  )
}

export default WithContextApp