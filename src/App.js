import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Home from "./Pages/Home"
import Article from "./Pages/Article"

import "./style.css"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
