import mapDataIE from "@highcharts/map-collection/countries/es/es-all.geo.json";
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