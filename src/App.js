import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Layout from './components/global/Layout'
import Landing from './pages/Landing'
import About from './pages/About'
import AskedQuestion from './pages/Faq'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Router>
        <Route exact path='/' component={Landing}/>
        <Route path='/About' component={About}/>
        <Route path='/FAQ' component={AskedQuestion}/>
        <Route path='/Contact' component={Contact}/>
      </Router>
    </Layout>
  );
}

export default App;
