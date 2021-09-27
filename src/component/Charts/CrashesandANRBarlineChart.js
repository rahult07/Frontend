import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class CrashesandANRBarlineChart extends Component {
    componentDidMount() {

        am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);

        // Create chart instance
        let chart = am4core.create("crashes-bar", am4charts.XYChart);

        // Data for both series
        let data = [{
            "date": "Jan 1",
            "totalsessions": 23.5,
            "sessionswithcrashes": 21.1
        }, {
            "date": "Jan 2",
            "totalsessions": 26.2,
            "sessionswithcrashes": 20.5
        }, {
            "date": "Jan 3",
            "totalsessions": 30.1,
            "sessionswithcrashes": 14.9
        }, {
            "date": "Jan 4",
            "totalsessions": 29.5,
            "sessionswithcrashes": 21.1
        }, {
            "date": "Jan 5",
            "totalsessions": 29.5,
            "sessionswithcrashes": 11.1
        }, {
            "date": "Jan 6",
            "totalsessions": 40.8,
            "sessionswithcrashes": 15.5
        }, {
            "date": "Jan 7",
            "totalsessions": 35.4,
            "sessionswithcrashes": 10.4
        }, {
            "date": "Jan 8",
            "totalsessions": 30.8,
            "sessionswithcrashes": 8.5
        }, {
            "date": "Jan 9",
            "totalsessions": 48.8,
            "sessionswithcrashes": 11
        }, {
            "date": "Jan 10",
            "totalsessions": 50.4,
            "sessionswithcrashes": 9.3
        }, {
            "date": "Jan 11",
            "totalsessions": 54.2,
            "sessionswithcrashes": 4.7
        }, {
            "date": "Jan 12",
            "totalsessions": 49.8,
            "sessionswithcrashes": 14
        }, {
            "date": "Jan 13",
            "totalsessions": 45.8,
            "sessionswithcrashes": 20.4
        }, {
            "date": "Jan 14",
            "totalsessions": 42.2,
            "sessionswithcrashes": 10
        }, {
            "date": "Jan 15",
            "totalsessions": 40.8,
            "sessionswithcrashes": 17.3
        }
        ];

        /* Create axes */
        let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.grid.template.location = 0;

        /* Create value axis */
        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.renderer.grid.template.disabled = false;
        


        /* Create series */
        let columnSeries = chart.series.push(new am4charts.ColumnSeries());
        columnSeries.name = "Total Sessions";
        columnSeries.dataFields.valueY = "totalsessions";
        columnSeries.dataFields.categoryX = "date";

        columnSeries.columns.template.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
        columnSeries.columns.template.propertyFields.fillOpacity = "fillOpacity";
        columnSeries.columns.template.propertyFields.stroke = "stroke";
        columnSeries.columns.template.propertyFields.strokeWidth = "strokeWidth";
        columnSeries.columns.template.propertyFields.strokeDasharray = "columnDash";
        columnSeries.columns.template.width = 30;
        columnSeries.tooltip.label.textAlign = "middle";
        columnSeries.fill = am4core.color("#902c2d");
        columnSeries.stroke = am4core.color("#902c2d");

        let lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.name = "Sessions with Crashes";
        lineSeries.dataFields.valueY = "sessionswithcrashes";
        lineSeries.dataFields.categoryX = "date";
        lineSeries.stroke = am4core.color("#f05440");
        lineSeries.strokeWidth = 3;
        lineSeries.propertyFields.strokeDasharray = "lineDash";
        lineSeries.tooltip.label.textAlign = "middle";

        let bullet = lineSeries.bullets.push(new am4charts.Bullet());
        bullet.fill = am4core.color("#f05440"); // tooltips grab fill from parent by default
        bullet.tooltipText = "[#fff font-size: 15px]{name} in {categoryX}:\n[/][#fff font-size: 20px]{valueY}[/] [#fff]{additional}[/]"
        let circle = bullet.createChild(am4core.Circle);
        circle.radius = 4;
        circle.fill = am4core.color("#fff");
        circle.strokeWidth = 3;

        chart.data = data;

        

    }

    render() {
        return (
            <div>
                <div id="crashes-bar" style={{ width: "100%", height: "400px" }} />
            </div>
        )
    }
}
