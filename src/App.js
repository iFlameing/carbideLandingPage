import React from "react";
import AppBar from "./Component/AppBar/AppBar";
import About from "./Component/About/About";
import Footer from "./Component/Footer/Footer"

export default function App() {
  return (
    <div>
      <AppBar />
      <About/><br/><br/>
      <Footer />
    </div>
  );
}
