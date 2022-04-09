import { createContext, useState } from "react"

export const ProductContext = createContext()

const initialProducts = [
  {id:1, product:"Basketball", price: 10},
  {id:2, product:"Baseball", price: 12},
  {id:3, product:"Tennis Racquet", price: 15},
]
export const ProductProvider = props => {
  const [products, setProducts] = useState(initialProducts);
  
  const increasePrice  = (e) => {
    const newProducts = [...products];
    newProducts[e.target.id-1].price += 1;
    setProducts(newProducts);
  }
  const decreasePrice  = (e) => {
    const newProducts = [...products];
    newProducts[e.target.id-1].price -= 1;
    setProducts(newProducts);
  };

  return (
    <ProductContext.Provider value={{products, setProducts, increasePrice, decreasePrice}}>
      {props.children}
    </ProductContext.Provider>)
}