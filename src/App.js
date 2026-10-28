import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Rail from "./Rail";
import Home from "./Home";
import About from "./About";
import Music from "./Music";
import Contact from "./Contact";
import NotFound from "./NotFound";
import BlogPostDetail from "./BlogPostDetail";
import Tour from './Tour';

function App() {
  return (
    <BrowserRouter>
      <div className="App shell">
        <Rail />
        <main className="shell-main">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/music">
              <Music />
            </Route>
            <Route exact path="/tour">
              <Tour />
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
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
