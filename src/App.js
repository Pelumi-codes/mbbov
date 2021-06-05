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
import ForgotPassword from "./pages/dashboard/ForgotPassword";
import SignIn from "./pages/dashboard/SignIn";
import VerifyEmail from "./pages/dashboard/verifyEmail";
import Error from "./pages/Error";
import FormTest from "./pages/FormTest";
import LoanCalculator from "./pages/LoanCalculator";
import LoginDashboard from "./pages/LoginDashboard";
import Login from "./pages/Login";
import InvestmentDashboard from "./pages/InvestmentDashboard";
import SavingsDashboard from "./pages/SavingsDashboard";
import LoanDashboard from "./pages/LoanDashboard";

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
        <Route exact path="/error" component={Error} />
        <Route exact path="/loan-calculator" component={LoanCalculator} />
        <Route exact path="/form-test" component={FormTest} />
        <Route exact path="/Login" component={Login} />

        <Route exact path="/login-dashboard" component={LoginDashboard} />
        <Route
          exact
          path="/investment-dashboard"
          component={InvestmentDashboard}
        />
        <Route exact path="/savings-dashboard" component={SavingsDashboard} />
        <Route exact path="/loan-dashboard" component={LoanDashboard} />
        <Route
          exact
          path="/investment-dashboard"
          component={InvestmentDashboard}
        />

        {/* Authentication */}
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/verify-email" component={VerifyEmail} />

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
