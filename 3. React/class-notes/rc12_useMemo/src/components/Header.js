import React, {memo} from "react";
import cw from "../assets/cw_logo.png";

const Header = ({img}) => {
  //! when use memo, the Header component will not re-render when img changes
  //! but the Header component will re-render when img changes
  console.log("Header Component Rendered");


  return (
    <div className="header">
      <img src={img ? img : cw} 
           alt="cw-logo"
           style={{margin : "1rem", maxHeight: "200px"}}/>
    </div>
  );
};

export default React.memo(Header);
