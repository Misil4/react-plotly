import React from 'react';
import { AreaChart,CartesianGrid,XAxis,YAxis,Area } from 'recharts';

const MyAreachart = (props) => {
    return (
        <AreaChart width={400} height={400} data={props.areaData}>
    <Area dataKey="students" fill="green" stroke="green" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </AreaChart>
    )
}
export default MyAreachart;