import './App.css';
import React from 'react';
import { Button,Box,Grid } from '@material-ui/core';
import MenuBar from './Components/MenuBar';
import {Switch,Route,BrowserRouter as Router,Link} from 'react-router-dom';
import GraphBox from './Components/graphBox';
import Home from './Components/Home';

const App = () => {
  return (
  <Router>
    <MenuBar title="CHART COMPILATION" />
  <div>

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
        <Home />
      </Route>
    </Switch>
  </div>
</Router>
  );
}

export default App;
