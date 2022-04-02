import React from "react";
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";

import logo from "../../assets/cw.svg";
import useStyles from "./styles";
import { ShoppingCart } from "@mui/icons-material";

const Navbar = ({ totalItems, setShowCard }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <IconButton
              aria-label="Show product items"
              color="inherit"
              onClick={() => setShowCard(false)}
            >
              <img
                src={logo}
                alt="logo"
                height="25px"
                className={classes.image}
              />
            </IconButton>
            Clarus Store
          </Typography>
          <div className={classes.button}>
            <IconButton
              aria-label="Show cart items"
              color="inherit"
              onClick={() => setShowCard(true)}
            >
              <Badge badgeContent={totalItems} color="error">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
