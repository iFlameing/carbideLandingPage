import React from "react";
import "./App.css";
import ResponsiveDrawer from "./Component/AppBar/AppBar";
import Home from "./Component/Home/Home";
import { Router } from "@reach/router";
import Fotter from "./Component/Footer/Footer";
import Courasel from "./Component/Courasel/courasel";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";

function App() {
  return (
    <div className="App">
      <ResponsiveDrawer />
      <Home />
      <Router>
        <Courasel path="/" />
      </Router>
      <Router>
        <About path="/about" />
      </Router>
      <Router>
        <Product path="/product" />
      </Router>

      <Fotter />
    </div>
  );
}

export default App;
