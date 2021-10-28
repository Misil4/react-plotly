import './App.css';
import React from 'react';
import GraphBox from './Components/graphBox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  return (
  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Plotly">Plotly</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </nav>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/Plotly">
      <GraphBox />
      </Route>
      <Route path="/users">
      <GraphBox />
      </Route>
      <Route path="/">
      </Route>
    </Switch>
  </div>
</Router>
  );
}

export default App;
