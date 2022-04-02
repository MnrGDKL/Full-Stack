import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import {Link} from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);


  return (
    <div>
      <h2>Product Page</h2>
      <div className={styles.products}>
        {products.map((each) => (
          <Link to={`details/${each.id}`} key={each.id} 
                className={styles.product}>
            <h6>{each.category}</h6>
            <p>{each.title}</p>
            <img src={each.image} alt="product" 
                 style={{width: "100px"}}/>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Products;






