import logo from './logo.svg';
import './App.css';
import React from 'react';
import Graph from './Components/chart';
import Graph2  from './Components/highchart';
import GraphBox from './Components/graphBox';
d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/gapminder_with_codes.csv", function(err, rows){

  function filter_and_unpack(rows, key, year) {
  return rows.filter(row => row['year'] == year).map(row => row[key])
  }

  var frames = []
  var slider_steps = []

  var n = 11;
  var num = 1952;
  for (var i = 0; i <= n; i++) {
    var z = filter_and_unpack(rows, 'lifeExp', num)
    var locations = filter_and_unpack(rows, 'iso_alpha', num)
    frames[i] = {data: [{z: z, locations: locations, text: locations}], name: num}
    slider_steps.push ({
        label: num.toString(),
        method: "animate",
        args: [[num], {
            mode: "immediate",
            transition: {duration: 300},
            frame: {duration: 300}
          }
        ]
      })
    num = num + 5
  }
});.
function App() {
  return (
    <div>
    <div classname="chart">
     <GraphBox />
   </div>
   </div>
  );
}

export default App;
