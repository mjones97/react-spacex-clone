import React from "react";
import Header from "./components/Header"
import Satria from './components/Satria'
import Transporter from "./components/Transporter";
import Falcon from "./components/Falcon";
import Axioms from "./components/Axioms";
import Starship from "./components/Starship";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Satria />
      <Transporter />
      <Falcon />
      <Axioms />
      <Starship/>
      <Footer />
    </div>
  );
}

export default App;
