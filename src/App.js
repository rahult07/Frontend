import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Footer from './component/Footer';
import Home from './component/Home';
import AccountandUser from './component/AccountandUser';



function App() {
  return (
    <Router>
    <div className="wrapper">
      <Header />
      <Sidebar />

      <Switch>
        <Route exact path="/">
      <Home/>
      </Route>
      </Switch>
      <Switch>
        <Route path="/AccountandUser">
      <AccountandUser/>
      </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
