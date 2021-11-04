
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import React, { useState } from 'react';
import {  Grid } from '@mui/material';
import useInterval from '../Hooks/useInterval';
const options1 = {
  Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/us-population-density.json', function (data) {

  // Make codes uppercase to match the map data
  data.forEach(function (p) {
    p.code = p.code.toUpperCase();
  });

  // Instantiate the map
  Highcharts.mapChart('container', {

    chart: {
      map: 'countries/us/us-all',
      borderWidth: 1
    },

    title: {
      text: 'US population density (/km²)'
    },

    exporting: {
      sourceWidth: 600,
      sourceHeight: 500
    },

    legend: {
      layout: 'horizontal',
      borderWidth: 0,
      backgroundColor: 'rgba(255,255,255,0.85)',
      floating: true,
      verticalAlign: 'top',
      y: 25
    },

    mapNavigation: {
      enabled: true
    },

    colorAxis: {
      min: 1,
      type: 'logarithmic',
      minColor: '#EEEEFF',
      maxColor: '#000022',
      stops: [
        [0, '#EFEFFF'],
        [0.67, '#4444FF'],
        [1, '#000022']
      ]
    },

    series: [{
      animation: {
        duration: 1000
      },
      data: data,
      joinBy: ['postal-code', 'code'],
      dataLabels: {
        enabled: true,
        color: '#FFFFFF',
        format: '{point.code}'
      },
      name: 'Population density',
      tooltip: {
        pointFormat: '{point.code}: {point.value}/km²'
      }
    }]
  });
})
}
const Highchart = () => {
  const [valor, Setvalor] = useState(0)
  const options = {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: 'Contents of Highsoft\'s weekly fruit delivery'
    },
    subtitle: {
      text: '3D donut in Highcharts'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: [{
      name: 'Delivered amount',
      data: [
        ['Bananas', valor],
        ['Kiwi', 3],
        ['Mixed nuts', 1],
        ['Oranges', 6],
        ['Apples', 8],
        ['Pears', 4],
        ['Clementines', 4],
        ['Reddish (bag)', 1],
        ['Grapes (bunch)', 1]
      ]
    }]
  }
  useInterval(() => {
    valor === 20 ? null : Setvalor(valor + 1)
  }, 1000);

  return (
    <Grid style={{ margin: "100px auto" }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
        />
        {/* <Button style={{marginLeft : '250px'}}variant="contained" onClick={() => Setvalor(valor => [...valor, Math.floor(Math.random() * (100 - 0)) + 0])}>Añadir dato</Button> */}
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