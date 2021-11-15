import React,{useState} from 'react'
import useInterval from '../Hooks/useInterval';
import { Grid, Typography } from '@mui/material';
import MyLinechart from './recharts/Linechart';
import MyAreachart from './recharts/Areachart';
import MyPiechart from './recharts/Piechart';
import MyRadialChart from './recharts/Radialchart';
let counter =1;
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
const Recharts = () => {
  const [areaData,SetAreaData] = useState([{students : 400}]);
  const [lineData, SetLineData] = useState([{ uv: 400 }]);
  const [pieData,SetPieData] = useState([{name : "GROUP C",value: 400,fill: "#8884d8"}]);
  const [radialData,SetRadialData] = useState([{name: counter,uv: 31.47,pv: 2400,fill: colorArray[Math.floor(Math.random() * (50 - 0)) +0] }])
  useInterval(() => {
    lineData.length === 20 ? null : SetLineData((prevState) => [...prevState, {uv :Math.floor(Math.random() * (999 - 0)) +0}])
    areaData.length === 20 ? null : SetAreaData((prevState) => [...prevState, {students :Math.floor(Math.random() * (50 - 0)) +0}]);
    pieData.length === 20 ? null : SetPieData((prevState) => [...prevState, {name : "GROUP C",value :Math.floor(Math.random() * (999 - 0)) +0,fill :colorArray[Math.floor(Math.random() * (50 - 0)) +0]}])
    radialData.length === 20 ? null : SetRadialData((prevState) => [...prevState, {name : counter++,uv: Math.floor(Math.random() * (999 - 0)) +0,pv: 2400,fill: colorArray[Math.floor(Math.random() * (50 - 0)) +0] }])
  }, 1000);
  return (
    <div>
      <Grid style={{textAlign : "center"}} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Typography component="div" variant="h4"> Linechart</Typography>
  <MyLinechart lineData={lineData} />
  </Grid>
  <Grid item xs={6}>
    <Typography component="div" variant="h4">AreaChart</Typography>
  <MyAreachart areaData={areaData} />
  </Grid>
  <Grid item xs={6}>
    <MyPiechart data={pieData} />
  </Grid>
  <Grid item xs={6}>
    <MyRadialChart data={radialData} />
  </Grid>
</Grid>
    </div>
  )
}
export default Recharts;