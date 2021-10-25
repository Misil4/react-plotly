import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Plotly from "plotly.js"
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);
const Graph = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => setCounter(counter +1);
  const GetRandomData = () => setTimeout(() => counter<320 ?setCounter(counter+1) : clearTimeout(),60);
    return (
<div>
<IconButton aria-label="delete" onClick={handleClick}>
  <AddIcon />
</IconButton>
      <Plot

      data = {[
        {
          type: "indicator",
          value: counter,
          delta: { reference: 0 },
          gauge: { axis: { visible: false, range: [0, 250] } },
          domain: { row: 0, column: 0 }
        },
        {
          type: "indicator",
          value: 320,
          gauge: {
            shape: "bullet",
            axis: {
              visible: false,
              range: [-200, 200]
            }
          },
          domain: { x: [0.1, 0.5], y: [0.15, 0.35] }
        },
      ]}
      
      layout = {{
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
                delta: { reference: GetRandomData() }
              }
            ]
          }
        }
      }}

      />
</div>
    );

  }


export default Graph;