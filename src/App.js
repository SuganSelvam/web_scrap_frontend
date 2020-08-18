import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar";
import Snapdeal from "./Components/Snapdeal"
import Amazon from "./Components/Amazon"

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/Amazon">Amazon</Link>
            </li>
            <li>
              <Link to="/Snapdeal">Snapdeal</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Amazon">
            <Amazon />
          </Route>
          <Route path="/Snapdeal">
            <Snapdeal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
