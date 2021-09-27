import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class UseractivityChart extends Component {
    componentDidMount() {

     am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);
        // Create chart instance

        let chart = am4core.create("user-activity", am4charts.XYChart);

     
// Add data
chart.data = [{
  "date": "Jan 1",
  "totalusers":200,
  "activeusers": 100
}, {
  "date": "Jan 2",
  "totalusers": 280,
  "activeusers": 140
}, {
  "date": "Jan 3",
  "totalusers": 350,
  "activeusers": 180
}, {
  "date": "Jan 4",
  "totalusers": 410,
  "activeusers": 210
}, {
  "date": "Jan 5",
  "totalusers": 500,
  "activeusers": 275
}, {
  "date": "Jan 6",
  "totalusers": 540,
  "activeusers": 300
}, {
  "date": "Jan 7",
  "totalusers": 580,
  "activeusers": 315
}, {
  "date": "Jan 8",
  "totalusers": 600,
  "activeusers": 375
}, {
  "date": "Jan 9",
  "totalusers": 650,
  "activeusers": 345
}, {
  "date": "Jan 10",
  "totalusers": 700,
  "activeusers": 350
}, {
  "date": "Jan 11",
  "totalusers": 750,
  "activeusers": 320
}, {
  "date": "Jan 12",
  "totalusers": 800,
  "activeusers": 250
}, {
  "date": "Jan 13",
  "totalusers": 850,
  "activeusers": 260
}, {
  "date": "Jan 14",
  "totalusers": 880,
  "activeusers": 300
}, {
  "date": "Jan 15",
  "totalusers": 920,
  "activeusers": 330
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "date";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;
categoryAxis.cursorTooltipEnabled = false;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.fontWeight = 800;
valueAxis.cursorTooltipEnabled = false;

// second value axis for quantity
let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.renderer.opposite = true;
valueAxis2.syncWithAxis = valueAxis;
valueAxis2.tooltip.disabled = true;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "totalusers";
series.dataFields.categoryX = "date";
series.clustered = false;
series.tooltipText = "Total Users on {categoryX}: [bold]{valueY}[/]";
series.fill = am4core.color("#902c2d");
series.stroke = am4core.color("#902c2d");
series.columns.template.width = 30

let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "activeusers";
series2.dataFields.categoryX = "date";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Active users on {categoryX}: [bold]{valueY}[/]";
series2.fill = am4core.color("#f05440");
series2.stroke = am4core.color("#f05440");
series2.columns.template.width = 20


chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

  

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
                  <div id="user-activity" style={{ width: "100%", height: "400px" }} />
            </div>
        )
    }
}
