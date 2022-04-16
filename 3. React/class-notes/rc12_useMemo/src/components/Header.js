import React from "react";
import cw from "../../assets/cw.png";

const Header = ({img}) => {
  return (
    <div className="header">
      <img src={img ? img : cw} 
           alt="cw-logo"
           style={{margin : "1rem", maxHeight: "200px"}}/>
    </div>
  );
};

export default Header;
