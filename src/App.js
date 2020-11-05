import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Projeler from "./components/Projeler.jsx";
import Home from "./components/Home.jsx";
import Referanslar from "./components/Referanslar.jsx";

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/Referanslar">
            <Header variant="light"/>
            <Referanslar />
          </Route>
          <Route exact path="/Projeler">
            <Header variant="light"/>
            <Projeler />
          </Route>
          <Route path="/">
            <Header variant="dark"/>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
