import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



export default class ConversionChart extends Component {

    componentDidMount() {
        am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);
        // Create chart instance
        let chart = am4core.create("conversion", am4charts.XYChart);

// Add data
chart.data = [
    { date: new Date(2021, 5, 12), value1: 50, value2: 48, previousDate: new Date(2021, 5, 5) },
    { date: new Date(2021, 5, 13), value1: 53, value2: 51, previousDate: new Date(2021, 5, 6) },
    { date: new Date(2021, 5, 14), value1: 56, value2: 58, previousDate: new Date(2021, 5, 7) },
    { date: new Date(2021, 5, 15), value1: 52, value2: 53, previousDate: new Date(2021, 5, 8) },
    { date: new Date(2021, 5, 16), value1: 48, value2: 44, previousDate: new Date(2021, 5, 9) },
    { date: new Date(2021, 5, 17), value1: 47, value2: 42, previousDate: new Date(2021, 5, 10) },
    { date: new Date(2021, 5, 18), value1: 59, value2: 55, previousDate: new Date(2021, 5, 11) }
]
// Create axes
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.renderer.minGridDistance = 50;
dateAxis.tooltip.disabled = true;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;

// Remove padding
chart.paddingBottom = 0;

// Create series
let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.valueY = "value1";
series.dataFields.dateX = "date";
series.strokeWidth = 2;
series.tensionX = 0.8;
series.minBulletDistance = 10;
series.tooltipText = "Cureent Date - [bold]{date.formatDate()}:[/] {value1}\n Previous Date - [bold]{previousDate.formatDate()}:[/] Previous - {value2}";
series.tooltip.pointerOrientation = "vertical";
series.stroke = am4core.color("#0bacff");
series.tooltip.getFillFromObject = false;
series.tooltip.background.fill = am4core.color("#086493");

// Create series
let series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "value2";
series2.dataFields.dateX = "date";
series2.strokeWidth = 2;
series.tensionX = 0.8;
series.minBulletDistance = 10;
series.tooltipText = "Cureent Date - [bold]{date.formatDate()}:[/] {value1}\n Previous Date - [bold]{previousDate.formatDate()}:[/] {value2}";
series.tooltip.pointerOrientation = "top";
series2.stroke = am4core.color("#086493");

chart.cursor = new am4charts.XYCursor();
    
  this.chart = chart;
    
    }
    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div>
            <div id="conversion" style={{ width: "100%", height:"300px" }} />    
            </div>
        )
    }
}
