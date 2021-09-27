import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class DailyconsmptionPieChart extends Component {
    componentDidMount() {// Themes begin
        am4core.useTheme(am4themes_animated);

        // Themes end

        // Create chart instance
        let chart = am4core.create("daily-consumption-pie", am4charts.PieChart);


        // Add data
        chart.data = [{
            "plan": "Less than 3 hrs",
            "count": 120
        }, {
            "plan": "3-5 hrs",
            "count": 200
        }, {
            "plan": "More than 5 hrs",
            "count": 400
        }
        ];

        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "count";
        pieSeries.dataFields.category = "plan";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.slices.template.strokeOpacity = 1;

        
        // This creates initial animation
        pieSeries.hiddenState.properties.opacity = 1;
        pieSeries.hiddenState.properties.endAngle = -90;
        pieSeries.hiddenState.properties.startAngle = -90;

        chart.hiddenState.properties.radius = am4core.percent(0);

        pieSeries.ticks.template.disabled = true;
        pieSeries.labels.template.disabled = true;
        pieSeries.alignLabels = false;
        pieSeries.labels.template.bent = true;
        pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
        pieSeries.labels.template.radius = am4core.percent(-40);
        pieSeries.labels.template.fill = am4core.color("white");

        chart.legend = new am4charts.Legend();
        chart.legend.position = "bottom";
        chart.legend.valueLabels.template.disabled = true;
        let markerTemplate = chart.legend.markers.template;
        markerTemplate.width = 12;
        markerTemplate.height = 12;

        chart.fontSize = 13;
        chart.padding(0, 0, 0, 0);

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
                <div id="daily-consumption-pie" style={{ width: "100%", height: "300px" }} />
            </div>
        )
    }
}
