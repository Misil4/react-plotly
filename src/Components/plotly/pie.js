import React from "react";
import Plot from 'react-plotly.js'
const MyPie = (props) => {
    return (
<Plot
            data={[{
              values: [19, props.value, 55],
              labels: ['Residential', 'Non-Residential', 'Utility'],
              type: 'pie'
            }]}
            layout={{
              height: 400,
              width: 500
            }
            }

          />)
        }
        export default MyPie;