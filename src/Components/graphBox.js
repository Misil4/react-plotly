import React from "react";
import { makeStyles } from "@mui/styles";
import Plot from 'react-plotly.js'
import rd3 from 'react-d3-library';


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
export default function GraphBox() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Prueba1</h3>
            <div className={classes.container}>
                <div className={classes.item}>
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
                        layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
                    />
                </div>
                <div className={classes.itemFlexGrow}>
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
                <Plot data = {[{
      type: 'choropleth',
      locationmode: 'world',
      locations: frames[0].data[0].locations,
      z: frames[0].data[0].z,
      text: frames[0].data[0].locations,
      zauto: false,
      zmin: 30,
      zmax: 90

}]}
var layout = {{
    title: 'World Life Expectency 1952 - 2007',
    geo:{
       scope: 'world',
       countrycolor: 'rgb(255, 255, 255)',
       showland: true,
       landcolor: 'rgb(217, 217, 217)',
       showlakes: true,
       lakecolor: 'rgb(255, 255, 255)',
       subunitcolor: 'rgb(255, 255, 255)',
       lonaxis: {},
       lataxis: {}
    },
    updatemenus: [{
      x: 0.1,
      y: 0,
      yanchor: "top",
      xanchor: "right",
      showactive: false,
      direction: "left",
      type: "buttons",
      pad: {"t": 87, "r": 10},
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      }, {
        method: "animate",
        args: [
          [null],
          {
            mode: "immediate",
            transition: {
              duration: 0
            },
            frame: {
              duration: 0
            }
          }
        ],
        label: "Pause"
      }]
    }],
    sliders: [{
      active: 0,
      steps: slider_steps,
      x: 0.1,
      len: 0.9,
      xanchor: "left",
      y: 0,
      yanchor: "top",
      pad: {t: 50, b: 10},
      currentvalue: {
        visible: true,
        prefix: "Year:",
        xanchor: "right",
        font: {
          size: 20,
          color: "#666"
        }
      },
      transition: {
        duration: 300,
        easing: "cubic-in-out"
      }
    }]
}
}
/>
);
                </div>
            </div>
        </div>
    );
}
