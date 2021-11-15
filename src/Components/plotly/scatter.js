import React from "react";
import Plot from 'react-plotly.js'
const MyScatter = (props) => {
    return (
        <Plot
            data={[
              {
                x: [1, 2, 3],
                y: [2, props.value, 3],
                type: 'scatter',
                mode: 'lines+markers',
                marker: { color: 'red' },
              },
              { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
            ]}
            layout={{ width: 320, height: 240, title: 'Fancy Plot' }}
          />
    )
}
export default MyScatter;