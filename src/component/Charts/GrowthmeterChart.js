import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class GrowthmeterChart extends Component {
    componentDidMount() {
        am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);

// Create chart instance
let chart = am4core.create("growth-chart", am4charts.XYChart);

chart.padding(0, 0, 0, 0);
chart.fontSize = 12;

// Add data
chart.data = [{
    "year": 2006,
    "income": 26.2,
    "expenses": 22.8
  },{
    "year": 2007,
    "income": 30.1,
    "expenses": 23.9
  }];
  
  // Create axes
  let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = "year";
  categoryAxis.numberFormatter.numberFormat = "#";
  categoryAxis.renderer.inversed = true;
  categoryAxis.renderer.grid.template.location = 0;
  categoryAxis.renderer.cellStartLocation = 0.1;
  categoryAxis.renderer.cellEndLocation = 0.9;
  
  let  valueAxis = chart.xAxes.push(new am4charts.ValueAxis()); 
  valueAxis.renderer.opposite = true;
  
  // Create series
  function createSeries(field, name) {
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = field;
    series.dataFields.categoryY = "year";
    series.name = name;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
    series.columns.template.height = am4core.percent(100);
    series.sequencedInterpolation = true;
  
    
    let categoryLabel = series.bullets.push(new am4charts.LabelBullet());
    categoryLabel.label.text = "{name}";
    categoryLabel.label.horizontalCenter = "right";
    categoryLabel.label.dx = -10;
    categoryLabel.label.fill = am4core.color("#fff");
    categoryLabel.label.hideOversized = false;
    categoryLabel.label.truncate = false;
  }
  
  valueAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.grid.template.disabled = true;

  createSeries("income", "Income");
  createSeries("expenses", "Expenses");

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
               <div id="growth-chart" style={{ width: "100%", height:"80px" }} />     
            </div>
        )
    }
}
