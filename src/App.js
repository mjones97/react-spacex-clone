import React from "react";
import Header from "./components/Header"
import Satria from './components/Satria'
import Transporter from "./components/Transporter";
import Falcon from "./components/Falcon";
import Axioms from "./components/Axioms";
import Starship from "./components/Starship";
import Footer from "./components/Footer";
import satria from "./assets/satria.jpeg"
import transporter from "./assets/transporter8-bg.jpeg"
import falcon from "./assets/crs28.jpeg"
import axioms from "./assets/ax2-mission.jpeg"
import starship from "./assets/starship.jpeg"

function App() {
  return (
    <div>
      <Header />
      <Satria
        background={satria}
        launch='Upcoming Launch'
        launchTitle='PSN Satria Mission'
        watchButton='Watch'
      />
      <Transporter
        background={transporter}
        launch='RECENT LAUNCH'
        launchTitle='TRANSPORTER-8 MISSION'
        watchButton='Rewatch' 
      />
      <Falcon 
        background={falcon}
        launch='RECENT LAUNCH'
        launchTitle='CRS-28 MISSION'
        watchButton='Rewatch' 
      />
      <Axioms
        background={axioms}
        launch='Completed Mission'
        launchTitle='AX-2 MISSION'
        watchButton='Rewatch' 
      />
      <Starship
        background={starship}
        launchTitle='STARSHIP FLIGHT TEST'
        watchButton='Rewatch'
        />
      <Footer />
    </div>
  );
}

export default App;
