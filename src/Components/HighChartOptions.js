import mapDataIE from "@highcharts/map-collection/countries/es/es-all.geo.json";
import Highcharts from "highcharts";
export const mapOptions = {
    chart: {
      map: 'countries/es/es-all'
    },
    title: {
      text: 'Map Demo'
    },
    credits: {
      enabled: false
    },
    mapNavigation: {
      enabled: true
    },
    tooltip: {
      headerFormat: '',
      pointFormat: '<b>{point.freq}</b><br><b>{point.keyword}</b>                      <br>lat: {point.lat}, lon: {point.lon}'
    },
    series: [{
      // Use the gb-all map with no data as a basemap
      name: 'Basemap',
      mapData: mapDataIE,
      borderColor: '#A0A0A0',
      nullColor: 'rgba(200, 200, 200, 0.3)',
      showInLegend: false
    }, {
      // Specify points using lat/lon
      type: 'mapbubble',
      name: 'Cities',
      color: '#4169E1',
      data: [{ z: 3, keyword: "San Sebastian", lat: 43.318333, lon: -1.981231 },
      { z: 3, keyword: "Madrid", lat: 40.416775, lon: -3.703790 }],
      cursor: 'pointer',
      point: {
        events: {
          click: function () {
            console.log(this.keyword);
          }
        }
      }
    }]
  }
  export const options = {
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
        ['Bananas', 3],
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
  export const multiChartsConfig = (value, open, click, placement, str1, str2) => {
    return {
      chart: {
          type: 'solidgauge',
          height: 380,
          width: 385,
          marginTop: 10,
          marginBottom: 0,
          style: { margin: 'auto' }
      },
      title: null,
      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [
            {
              backgroundColor: '#D8D8D8',
              outerRadius: '110%',
              innerRadius: '100%',
              borderWidth: 0
            },{
              backgroundColor: '#D8D8D8',
              outerRadius: '93%',
              innerRadius: '83%',
              borderWidth: 0
            },{
              backgroundColor: '#D8D8D8',
              outerRadius: '76%',
              innerRadius: '66%',
              borderWidth: 0
            }
          ]
      },
      tooltip:     {
          enabled: false
      },
      // the value axis
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: []
      },
      plotOptions: {
        solidgauge: {
          borderWidth: '34px',
          dataLabels: {
            enabled: true,
            borderWidth: 0,
            y: -30,
            useHTML: true,
            formatter: () => {
              return (`
                <div style="text-align: center;font-size:15px;color: #777777;">
                <div style="color: #009fc5;font-size: 17px;">${value.toLocaleString()}</div><div>${str1}</div><div>${str2}</div>
                </div>
              `);
            }
          },
          linecap: 'round',
          rounded: true,
          stickyTracking: false
        }
      },
      credits:     {
          enabled: false
      },
      series: [
        {
          name: 'open',
          rounded: true,
          data: [{
            color: '#009fc5',
            radius: '110%',
            innerRadius: '100%',
            y: Math.round(open * 100) 
          }]
        },
        {
          name: 'click',
          data: [{
            color: 'green',
            radius: '93%',
            innerRadius: '83%',
            y: Math.round(click * 100) 
          }]
        },
        {
          name: 'placement',
          data: [{
            color: 'red',
            radius: '76%',
            innerRadius: '66%',
            y: Math.round(placement * 100) 
          }]
        }
      ]
    };
  }
  function renderIcons() {

    // Move icon
    if (!this.series[0].icon) {
      this.series[0].icon = this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
        .attr({
          stroke: '#303030',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
          zIndex: 10
        })
        .add(this.series[2].group);
    }
    this.series[0].icon.translate(
      this.chartWidth / 2 - 10,
      this.plotHeight / 2 - this.series[0].points[0].shapeArgs.innerR -
        (this.series[0].points[0].shapeArgs.r - this.series[0].points[0].shapeArgs.innerR) / 2
    );
  
    // Exercise icon
    if (!this.series[1].icon) {
      this.series[1].icon = this.renderer.path(
        ['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8,
          'M', 8, -8, 'L', 16, 0, 8, 8]
      )
        .attr({
          stroke: '#ffffff',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
          zIndex: 10
        })
        .add(this.series[2].group);
    }
    this.series[1].icon.translate(
      this.chartWidth / 2 - 10,
      this.plotHeight / 2 - this.series[1].points[0].shapeArgs.innerR -
        (this.series[1].points[0].shapeArgs.r - this.series[1].points[0].shapeArgs.innerR) / 2
    );
  
    // Stand icon
    if (!this.series[2].icon) {
      this.series[2].icon = this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
        .attr({
          stroke: '#303030',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          'stroke-width': 2,
          zIndex: 10
        })
        .add(this.series[2].group);
    }
  
    this.series[2].icon.translate(
      this.chartWidth / 2 - 10,
      this.plotHeight / 2 - this.series[2].points[0].shapeArgs.innerR -
        (this.series[2].points[0].shapeArgs.r - this.series[2].points[0].shapeArgs.innerR) / 2
    );
  }
export const gaugeOptions ={  
  
    chart: {
      type: 'solidgauge',
      height: '60%',
      events: {
        render: renderIcons
      }
    },
  
    title: {
      text: 'Activity',
      style: {
        fontSize: '24px'
      }
    },
  
    tooltip: {
      borderWidth: 0,
      backgroundColor: 'none',
      shadow: false,
      style: {
        fontSize: '16px'
      },
      valueSuffix: '%',
      pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}</span>',
      positioner: function (labelWidth) {
        return {
          x: (this.chart.chartWidth - labelWidth) / 2,
          y: (this.chart.plotHeight / 2) + 15
        };
      }
    },
  
    pane: {
      startAngle: 0,
      endAngle: 360,
      background: [{ // Track for Move
        outerRadius: '112%',
        innerRadius: '88%',
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[0])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }, { // Track for Exercise
        outerRadius: '87%',
        innerRadius: '63%',
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[1])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }, { // Track for Stand
        outerRadius: '62%',
        innerRadius: '38%',
        backgroundColor: Highcharts.color(Highcharts.getOptions().colors[2])
          .setOpacity(0.3)
          .get(),
        borderWidth: 0
      }]
    },
  
    yAxis: {
      min: 0,
      max: 100,
      lineWidth: 0,
      tickPositions: []
    },
  
    plotOptions: {
      solidgauge: {
        dataLabels: {
          enabled: false
        },
        linecap: 'round',
        stickyTracking: false,
        rounded: true
      }
    },
  
    series: [{
      name: 'Move',
      data: [{
        color: Highcharts.getOptions().colors[0],
        radius: '112%',
        innerRadius: '88%',
        y: 80
      }]
    }, {
      name: 'Exercise',
      data: [{
        color: Highcharts.getOptions().colors[1],
        radius: '87%',
        innerRadius: '63%',
        y: 65
      }]
    }, {
      name: 'Stand',
      data: [{
        color: Highcharts.getOptions().colors[2],
        radius: '62%',
        innerRadius: '38%',
        y: 50
      }]
    }]
  };