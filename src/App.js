import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./dashboard.css";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Loan from "./pages/Loan";
import Investment from "./pages/Investment";
import Savings from "./pages/Savings";
import SignUp from "./pages/dashboard/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/savings" component={Savings} />
        <Route exact path="/Loan" component={Loan} />
        <Route exact path="/Investment" component={Investment} />

        {/* Authentication */}
        <Route exact path="/sign-up" component={SignUp} />

        {/* Page Not Found */}
        <Route
          component={() => (
            <>
              <h1>Page Not Found.</h1>
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
