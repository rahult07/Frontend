import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";



export default class UsersBarChart extends Component {
  componentDidMount() {

    am4core.addLicense("CH258896422");

    am4core.useTheme(am4themes_animated);
    // Create chart instance

    let chart = am4core.create("overview-users", am4charts.XYChart);

 

// Add data
chart.data = [{
"year": "2016",
"targeted": 200,
"achived": 180
}, {
"year": "2017",
"targeted": 400,
"achived": 320
}, {
"year": "2018",
"targeted": 480,
"achived": 600
}, {
"year": "2019",
"targeted": 580,
"achived": 500
}, {
"year": "2020",
"targeted": 600,
"achived": 520
}, {
"year": "2021",
"targeted": 800,
"achived": 760
}];

// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 0;
categoryAxis.tooltip.disabled = true;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.fontWeight = 800;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.cursorTooltipEnabled = false;
valueAxis.renderer.minGridDistance = 20;
// Do not crop bullets
chart.maskBullets = false;

// Remove padding
chart.paddingBottom = 0;

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "targeted";
series.dataFields.categoryX = "year";
series.clustered = false;
series.tooltipText = "Users in {categoryX} (targeted): [bold]{valueY}";
series.fill = am4core.color("#902c2d");
series.stroke = am4core.color("#902c2d");
series.columns.template.width = 25


let series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "achived";
series2.dataFields.categoryX = "year";
series2.clustered = false;
series2.columns.template.width = am4core.percent(50);
series2.calculatePercent = true;
series2.tooltipText = "Users in {categoryX} (achived): [bold]{valueY.percent}%";
series2.fill = am4core.color("#f05440");
series2.stroke = am4core.color("#f05440");
series2.columns.template.width = 15


chart.cursor = new am4charts.XYCursor();
chart.cursor.lineX.disabled = true;
chart.cursor.lineY.disabled = true;

valueAxis.renderer.grid.template.disabled = true;
categoryAxis.renderer.grid.template.disabled = true;

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
                  <div id="overview-users" style={{ width: "100%", height: "100px" }} />
            </div>
        )
    }
}
