import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LinearIndeterminate from "./LinearIndeterminate"
import Dialog from "./Dialog"
import Card from "./Card"
import Table from "./Table"
import SnackBar from "./SnackBar"
import Select from "./Select"

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/select">Select</Link>
          </li>
          <li>
            <Link to="/snackbar">SnackBar</Link>
          </li>
          <li>
            <Link to="/card">Card</Link>
          </li>
          <li>
            <Link to="/dialog">Dialog</Link>
          </li>
          <li>
            <Link to="/progress">progress</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/select" component={Select} />
        <Route path="/snackbar" component={SnackBar} />
        <Route path="/card" component={Card} />
        <Route path="/dialog" component={Dialog} />
        <Route path="/progress" component={LinearIndeterminate} />
        <Route path="/table" component={Table} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


export default App;
