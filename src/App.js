import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Layout from './components/global/Layout'
import Landing from './pages/Landing'
import About from './pages/About'
import AskedQuestion from './pages/Faq'
import Contact from './pages/Contact'
import Loan from './pages/Loan'
import Investment from './pages/Investment'
import Savings from './pages/Savings'
import Error from './pages/Error'

import FormTest from './pages/FormTest'
import LoanCalculator from './pages/LoanCalculator';
import LoginDashboard from './pages/LoginDashboard';
import Login from './pages/Login';

import InvestmentDashboard from './pages/InvestmentDashboard';
import SavingsDashboard from './pages/SavingsDashboard';
import LoanDashboard from './pages/LoanDashboard';


function App() {
  return (
    <>
    <Layout>
      <Router>
        <Route exact path='/' component={Landing}/>
        <Route path='/About' component={About}/>
        <Route path='/FAQ' component={AskedQuestion}/>
        <Route path='/Contact' component={Contact}/>
        <Route exact path='/savings' component={Savings}/>
        <Route exact path='/Loan' component={Loan}/>
        <Route exact path='/Investment' component={Investment}/>
        <Route exact path='/error' component={Error} />
        <Route exact path='/loan-calculator' component={LoanCalculator} />
        <Route exact path='/form-test' component={FormTest} />
        
          <Route exact path='/Login' component={Login} />
          
        <Route exact path='/login-dashboard' component={LoginDashboard} />
        <Route exact path='/investment-dashboard' component={InvestmentDashboard} />
        <Route exact path='/savings-dashboard' component={SavingsDashboard} />
        <Route exact path='/loan-dashboard' component={LoanDashboard} />
      </Router>
      </Layout>
     
      </>
  );
}

export default App;
