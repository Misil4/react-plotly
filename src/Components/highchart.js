import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React from 'react';
import { Grid } from '@mui/material';


const options = {
  title: {
    text: 'My chart'
  },
  series: [{
    data: [1, 2, 3]
  }]
}
const Highchart = () => {
  return (
    <Grid style={{ margin: "100px auto" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <HighchartsReact
    highcharts={Highcharts}
    options={options}
  />
  </Grid>
  <Grid item xs={6}>
    2
  </Grid>
  <Grid item xs={6}>
    3
  </Grid>
  <Grid item xs={6}>
    4
  </Grid>
</Grid>
  )
} 
export default Highchart