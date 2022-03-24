import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";


//! Parent Component (index.js) uses render() function to render web applicaton. This method takes 2 arguments:
//* 1. the component or elements to be rendered.
//* 2. where the web page renders.

ReactDOM.render(
      <App />, 
      document.getElementById("root")
);
