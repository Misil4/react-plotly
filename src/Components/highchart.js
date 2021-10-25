import React from "react";
import ReactHighcharts from 'react-highcharts';
import  {createPieChart} from '@pxblue/highcharts';


const graphStyles = {
    domProps: {
        style: {
            height: '100%',
        },
    },
};
const Graph2 = () => {
  return (
    <div style={{ height: '200px' }}>
    <ReactHighcharts config={createPieChart()} {...graphStyles} />
</div>
  )
} 
export default Graph2