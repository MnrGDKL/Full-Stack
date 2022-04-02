import axios from "axios";
import { React, useEffect, useState } from "react";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCard, setShowCard] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCart = (product, quantity) => {
    setCart([...cart, { ...product, quantity }]);
    console.log(cart);
  };

  const handleUpdateCartQty = (productId, quantity) => {
    if (quantity === 0) {
      handleRemove(productId);
    } else {
      const updatedCard = cart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      );
      setCart(updatedCard);
    }
  };

  const handleRemove = (productId) => {
    const filterCard = cart.filter((item) => item.id !== productId);
    setCart(filterCard);
  };

  const handleEmptyCart = () => setCart([]);

  return (
    <div>
      <Navbar
        totalItems={cart?.length}
        showCard={showCard}
        setShowCard={setShowCard}
      />

      {!showCard && (
        <Products
          products={products}
          handleAddToCart={handleAddToCart}
          loading={loading}
        />
      )}

      {showCard && (
        <Cart
          cart={cart}
          handleUpdateCartQty={handleUpdateCartQty}
          handleRemove={handleRemove}
          handleEmptyCart={handleEmptyCart}
        />
      )}
    </div>
  );
}

export default App;
