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
import  RegionProvider from './context/provider'

class App extends Component {
  render() {
    return (
      <RegionProvider>
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
            <Route exact path="/pricing" component={Pricing} />
          <Route path="/company" component={Company} />
          <Footer />
        </div>
      </Router>     
      </RegionProvider>
    );
  }
}

export default App;
