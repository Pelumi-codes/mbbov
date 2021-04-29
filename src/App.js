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

function App() {
  return (
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
        
      </Router>
    </Layout>
  );
}

export default App;
