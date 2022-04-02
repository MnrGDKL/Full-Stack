import React from "react";
import useStyles from "./styles";
import CartItem from "./CardItems/CartItem";
import { Button, Container, Grid, Typography } from "@mui/material";

const Cart = ({ cart, handleUpdateCartQty, handleRemove, handleEmptyCart }) => {
  const classes = useStyles();

  let subTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    subTotal += cart[i].quantity * cart[i].price;
  }

  const EmptyCart = () => {
    return (
      <Typography variant="subtitle1">
        You have no items in your shopping cart,
        <a href="/" className={classes.link}>
          start adding some!
        </a>
      </Typography>
    );
  };

  const FilledCart = () => {
    return (
      <>
        <Grid container spacing={3}>
          {cart?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <CartItem
                item={item}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemove={handleRemove}
              />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">
            Subtotal: {subTotal.toFixed(2) + "$"}
          </Typography>
          <div>
            <Button
              className={classes.emptyButton}
              size="large"
              type="button"
              variant="contained"
              color="error"
              onClick={handleEmptyCart}
            >
              Empty Cart
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h4" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart?.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
