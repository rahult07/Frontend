import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class CrashesandANRChart extends Component {
    componentDidMount() {
        am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);
        // Create chart instance

        let chart = am4core.create("crashes-and-anr", am4charts.XYChart);


         
// Add data
chart.data = [{
  "date": "Jan 1",
  "totalsessions":328,
  "sessionswithcrashes": 1
}, {
  "date": "Jan 2",
  "totalsessions": 339,
  "sessionswithcrashes": 2
}, {
  "date": "Jan 3",
  "totalsessions": 348,
  "sessionswithcrashes": 4
}, {
  "date": "Jan 4",
  "totalsessions": 361,
  "sessionswithcrashes": 6
}, {
  "date": "Jan 5",
  "totalsessions": 365,
  "sessionswithcrashes": 3
}, {
  "date": "Jan 6",
  "totalsessions": 380,
  "sessionswithcrashes": 2
}, {
  "date": "Jan 7",
  "totalsessions": 370,
  "sessionswithcrashes": 1
}, {
  "date": "Jan 8",
  "totalsessions": 370,
  "sessionswithcrashes": 2
}, {
  "date": "Jan 9",
  "totalsessions": 377,
  "sessionswithcrashes": 1
}, {
  "date": "Jan 10",
  "totalsessions": 390,
  "sessionswithcrashes": 5
}, {
  "date": "Jan 11",
  "totalsessions": 400,
  "sessionswithcrashes": 2
}, {
  "date": "Jan 12",
  "totalsessions": 410,
  "sessionswithcrashes": 6
}, {
  "date": "Jan 13",
  "totalsessions": 420,
  "sessionswithcrashes": 7
}, {
  "date": "Jan 14",
  "totalsessions": 425,
  "sessionswithcrashes": 10
}, {
  "date": "Jan 15",
  "totalsessions": 480,
  "sessionswithcrashes": 14
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

let valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "";
valueAxis2.renderer.opposite = true;
valueAxis2.cursorTooltipEnabled = false;
valueAxis2.renderer.grid.template.disabled = true;
valueAxis2.renderer.minGridDistance = 50;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "totalsessions";
series.dataFields.categoryX = "date";
series.yAxis = valueAxis;
series.clustered = false;
series.tooltipText = "Total Sessions  on {categoryX}: [bold]{valueY}";
series.fill = am4core.color("#902c2d");
series.stroke = am4core.color("#902c2d");
series.columns.template.width = 30

let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "sessionswithcrashes";
series2.dataFields.categoryX = "date";
series2.yAxis = valueAxis2;
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.tooltipText = "Sessions with Crashes on {categoryX}: [bold]{valueY}";
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
                  <div id="crashes-and-anr" style={{ width: "100%", height: "400px" }} />
            </div>
        )
    }
}
