import React from "react";
import Plot from 'react-plotly.js'
const MyBar = (props) => {
    return (
<Plot data={[
    {
      x: ['giraffes', 'orangutans', 'monkeys'],
      y: [20, props.value, 23],
      type: 'bar'
    }
  ]} />);
}
export default MyBar;