import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './global.css'
import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import Pricing from './pages/Pricing'
import Company from './pages/Company'
import Header from './components/Header'
import Footer from './components/Footer'
import AddProvider from './context/provider'
import AddContext from './context/context';
class App extends Component {
  render () {
    return (
      <AddProvider>
        <Router>
          <div className="container">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/company" component={Company} />
            <Footer />
          </div>
        </Router></AddProvider>
    );
  }
}

export default App;
