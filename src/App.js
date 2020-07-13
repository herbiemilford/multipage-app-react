import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Contact } from "./pages";
import { Nav, Footer } from "./layout";
import { directive } from "@babel/types";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Nav />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
