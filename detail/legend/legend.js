"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Legend = require('react-d3-core').Legend;

(function() {
  var width = 500,
    height = 400,
    margins = {top: 40, right: 50, bottom: 40, left: 50},
    legendClassName = "test-legend-class",
    legendPosition = 'left',
    legendOffset = 90,
    chartSeries = [
      {
        field: 'Under 5 Years',
        name: 'Under 5 Years',
        color: '#1f77b4'
      },
      {
        field: '5 to 13 Years',
        name: '5 to 13 Years',
        color: '#ff7f0e'
      },
      {
        field: '14 to 17 Years',
        name: '14 to 17 Years',
        color: '#2ca02c'
      },
      {
        field: '18 to 24 Years',
        name: '18 to 24 Years',
        color: '#d62728'
      },
      {
        field: '25 to 44 Years',
        name: '25 to 44 Years',
        color: '#9467bd'
      },
      {
        field: '45 to 64 Years',
        name: '45 to 64 Years',
        color: '#8c564b'
      },
      {
        field: '65 Years and Over',
        name: '65 Years and Over',
        color: '#e377c2'
      },

    ]

  ReactDOM.render(
    <Legend
      width= {width}
      height= {height}
      margins= {margins}
      legendClassName= {legendClassName}
      legendPosition= {legendPosition}
      legendOffset= {legendOffset}
      chartSeries = {chartSeries}
    />
  , document.getElementById('blank-legend')
  )
})()
