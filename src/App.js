import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Layout from './components/global/Layout'
import Landing from './pages/Landing'

function App() {
  return (
    <Layout>
      <Router>
        <Route exact path='/' component={Landing}/>
      </Router>
    </Layout>
  );
}

export default App;
