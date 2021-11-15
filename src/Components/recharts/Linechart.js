import React from 'react';
import {LineChart, Line} from 'recharts';
const MyLinechart = (props) => {
    return (
        <LineChart width={400} height={400} data={props.lineData}>
      <Line type="monotone" dataKey="uv" stroke="#ff7300" />
    </LineChart>
    )
}
export default MyLinechart;