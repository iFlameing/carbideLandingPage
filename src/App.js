import React from "react";
import AppBar from "./Component/AppBar/AppBar";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer";
import { Router } from "@reach/router";
import Home from "./Component/Home/Home"
export default function App() {
  return (
    <div>
      <AppBar />
      <Router>
      <Home path="/"/>
      </Router>
      <Router>
        <About path="about" />
      </Router>
      <br />
      <br />
      <Footer />
    </div>
  );
}
