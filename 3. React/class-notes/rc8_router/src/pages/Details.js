import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.css";
import BackArrow from "../assets/BackArrow";
import CheckoutBag from "../assets/CheckoutBag";

const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  
  const handleBack = () => {
    navigate(-1);
  };

  const handleCheckout = () => {
    navigate("/checkout", {state: {product}});
  };


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [params.productId]);
  return (
    <div >
      <div className={styles.detailsNav}>
        <BackArrow  onClick={handleBack}
                    className={styles.detailsNavIcon}/>
        <h1>Details Page</h1>
        <CheckoutBag onClick={handleCheckout}
                    className={styles.detailsNavIcon}/>
      </div>
      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.desciption}</p>
        <p>{product?.category}</p>
        <p>{product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img
          className={styles.detailsImage}
          src={product?.image}
          alt={product?.title}
        />
      </div>
    </div>
  );
};
export default Details;