import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";

import useStyles from "./styles";

const Product = ({ product, handleAddToCart }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.title}
        />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h6" gutterBottom>
              {product.title}
            </Typography>
            <Typography variant="h6" color="initial">
              {product.price + "$"}
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <Typography variant="body2" color="textSecondary">
            {product.category}
          </Typography>
          <IconButton
            aria-label="Add to Cart"
            onClick={() =>
              handleAddToCart(
                {
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                },
                1
              )
            }
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
