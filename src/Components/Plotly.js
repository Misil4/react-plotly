import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import useInterval from '../Hooks/useInterval';
import Plot from 'react-plotly.js'

const Plotly = () => {
  const [valor, SetValor] = useState(0);
  useInterval(() => {
    valor === 20 ? null : SetValor(valor + 1)
  }, 1000);
  return (
    <div>
      {console.log(valor)}
      <Grid style={{ margin: "100px auto" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Fancy Plot</Typography>
          <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, valor, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
              { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: 'Fancy Plot' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Indicator Chart</Typography>
          <Plot
            data={
              [
                {
                  type: "indicator",
                  value: valor,
                  delta: { reference: valor + 160 },
                  gauge: { axis: { visible: false, range: [0, 250] } },
                  domain: { row: 0, column: 0 }
                },
                {
                  type: "indicator",
                  value: valor,
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
        </Grid>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Pie Chart</Typography>
          <Plot
            data={[{
              values: [19, valor, 55],
              labels: ['Residential', 'Non-Residential', 'Utility'],
              type: 'pie'
            }]}
            layout={{
              height: 400,
              width: 500
            }
            }

          />
        </Grid>
        <Grid item xs={6}>
          <Typography component="div" variant="h4">Bar Chart</Typography>
          <Plot data={[
            {
              x: ['giraffes', 'orangutans', 'monkeys'],
              y: [20, valor, 23],
              type: 'bar'
            }
          ]} />
        </Grid>
      </Grid>
    </div>
  );
}
export default Plotly;
