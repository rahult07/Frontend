import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class GrowthSortedBarChart extends Component {
    componentDidMount() {

        am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);

        let chart = am4core.create("growth-bar-chart", am4charts.XYChart);
        chart.padding(20, 20, 0, 0);
        chart.fontSize = 12;


        // Add percent sign to all numbers
        chart.numberFormatter.numberFormat = "#.#'%'";

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = "Year";
        categoryAxis.renderer.minGridDistance = 1;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
        
        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;
        


        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.categoryY = "Year";
        series.dataFields.valueX = "Achived";
        series.tooltipText = "{valueX.value}"
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusBottomRight = 5;
        series.columns.template.column.cornerRadiusTopRight = 5;
        series.fill = am4core.color("#28a745");
        series.stroke = am4core.color("#28a745");
        series.columns.template.width = 4

        let labelBullet = series.bullets.push(new am4charts.LabelBullet())
        labelBullet.label.horizontalCenter = "left";
        labelBullet.label.dx = 10;
        labelBullet.label.text = "{Achived}";
        labelBullet.locationX = 1;
        labelBullet.label.fill = am4core.color("#ffffff");
        labelBullet.label.fontSize = 10;

        valueAxis.renderer.grid.template.disabled = true;


        categoryAxis.sortBySeries = series;
        chart.data = [
            {
                "Year": "2019",
                "Achived": 40
            },
            {
                "Year": "2020",
                "Achived": 60
            }
        ]

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
                <div id="growth-bar-chart" style={{ width: "100%", height: "80px" }} />
            </div>
        )
    }
}
