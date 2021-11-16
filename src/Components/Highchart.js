
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import React, { useState } from 'react';
import { Grid,Typography } from '@mui/material';
import useInterval from '../Hooks/useInterval';
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";
import { options, mapOptions, multiChartsConfig, gaugeOptions } from './highchart/HighChartOptions';
highchartsMore(Highcharts);
solidGauge(Highcharts);
highchartsMap(Highcharts);
const Highchart = () => {
  if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
  }
  const [valor, Setvalor] = useState(0)
  useInterval(() => {
    valor === 20 ? null : Setvalor(valor + 1)
  }, 1000);

  return (
    <Grid style={{ margin: "100px auto",textAlign : "center" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
      <Typography component="div" variant="h4"> PieChart</Typography>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        {/* <Button style={{marginLeft : '250px'}}variant="contained" onClick={() => Setvalor(valor => [...valor, Math.floor(Math.random() * (100 - 0)) + 0])}>Añadir dato</Button> */}
      </Grid>
      <Grid item xs={6}>
      <Typography component="div" variant="h4"> MapChart</Typography>
        <HighchartsReact
          constructorType={'mapChart'}
          highcharts={Highcharts}
          options={mapOptions}
        />
      </Grid>
      <Grid item xs={6}>
      <Typography component="div" variant="h4"> RadialChart</Typography>
        <HighchartsReact
          highcharts={Highcharts}
          options={multiChartsConfig(460, 60, 40, 10, 'Total', 'Sent')} />
      </Grid>
      <Grid item xs={6}>
      <Typography component="div" variant="h4"> GaugeChart</Typography>
        <HighchartsReact
          highcharts={Highcharts}
          options={gaugeOptions} />
      </Grid>
    </Grid>
  )
}
export default Highchart
