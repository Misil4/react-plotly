import React from "react";
import { makeStyles } from "@mui/styles";
import Plot from 'react-plotly.js'
import  * as d3 from 'd3'
import data from 'https://raw.githubusercontent.com/plotly/datasets/master/2010_alcohol_consumption_by_country.csv';
d3.csv(data, function(err, rows){
function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}
});

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex"
  },
  item: {
    border: "1px solid blue"
  },
  itemFlexGrow: {
    flexDirection: "row",
    border: "1px solid red"
  }
}))
const GraphBox = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h3>Plotly charts</h3>
      <div className={classes.container}>
        <div className={classes.itemFlexGrow}>
          <div className={classes.root}>
            <h3>Fancy plot</h3>
          </div>
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, 6, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
              { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: 'Fancy Plot' }}
          />
        </div>
        <div className={classes.itemFlexGrow}>
          <div className={classes.root}>
            <h3>Indicators</h3>
          </div>
          <Plot
            data={
              [
                {
                  type: "indicator",
                  value: 200,
                  delta: { reference: 160 },
                  gauge: { axis: { visible: false, range: [0, 250] } },
                  domain: { row: 0, column: 0 }
                },
                {
                  type: "indicator",
                  value: 120,
                  gauge: {
                    shape: "bullet",
                    axis: {
                      visible: false,
                      range: [-200, 200]
                    }
                  },
                  domain: { x: [0.1, 0.5], y: [0.15, 0.35] }
                },
                {
                  type: "indicator",
                  mode: "number+delta",
                  value: 300,
                  domain: { row: 0, column: 1 }
                },
                { type: "indicator", mode: "delta", value: 40, domain: { row: 1, column: 1 } }
              ]}
            layout={{
              width: 600,
              height: 400,
              margin: { t: 25, b: 25, l: 25, r: 25 },
              grid: { rows: 2, columns: 2, pattern: "independent" },
              template: {
                data: {
                  indicator: [
                    {
                      title: { text: "Speed" },
                      mode: "number+delta+gauge",
                      delta: { reference: 90 }
                    }
                  ]
                }
              }
            }
            }
          />
          );
        </div>
        <div className={classes.itemFlexGrow}>
          <div className={classes.root}>
            <h3>Pie Chart</h3>
            </div>
    <Plot data = {[{
        type: 'choropleth',
        locationmode: 'country names',
        locations: unpack(rows, 'location'),
        z: unpack(rows, 'alcohol'),
        text: unpack(rows, 'location'),
        autocolorscale: true
    }]}
      layout = {{
      title: 'Pure alcohol consumption<br>among adults (age 15+) in 2010',
      geo: {
          projection: {
              type: 'robinson'
          }
      }
    } 
  } />
        </div>
      </div>
      <div className={classes.container}>
        <div className={classes.itemFlexGrow}>
          <div className={classes.root}>
            <h3>Pie Chart</h3>
          </div>
          <Plot
            data={[{
              values: [19, 26, 55],
              labels: ['Residential', 'Non-Residential', 'Utility'],
              type: 'pie'
            }]}
            layout={{
              height: 400,
              width: 500
            }
            }

          />
          );
        </div>
        <div className={classes.itemFlexGrow}>
          <div className={classes.root}>
            <h3>Bar Chart</h3>
          </div>
          <Plot data={[
            {
              x: ['giraffes', 'orangutans', 'monkeys'],
              y: [20, 14, 23],
              type: 'bar'
            }
          ]} />
        </div>
      </div>
    </div>
  );
}
export default GraphBox;
