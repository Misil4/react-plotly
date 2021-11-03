import './App.css';
import React from 'react';
import MenuBar from './Components/MenuBar';
import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';
import Home from './Components/Home';
import Plotly from './Components/Plotly';
import Highchart from './Components/Highchart';

const App = () => {
  return (
  <Router>
    <MenuBar title="CHART COMPILATION" />
  <div>

    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
    <Switch>
      <Route path="/Plotly">
      <Plotly />
      </Route>
      <Route path="/Highchart">
      <Highchart />
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
