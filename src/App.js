import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Music from './Music';
import Contact from './Contact';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Navbar />
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/music">
          <Music />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
