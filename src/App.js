import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Navigation from "./Navbar";
import Home from "./Home";
import About from "./About";
import Music from "./Music";
import Contact from "./Contact";
import Footer from "./Footer";
import NotFound from "./NotFound";
import BlogPostDetail from "./BlogPostDetail";

function App() {
  return (
    <div className="App black">
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/music">
            <Music />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/blog/:title">
            <BlogPostDetail />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
