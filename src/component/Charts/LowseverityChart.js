import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class LowseverityChart extends Component {
    componentDidMount() {
        am4core.addLicense("CH258896422");
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        // Create chart instance
        let chart = am4core.create("low-severity", am4charts.PieChart);

        // Let's cut a hole in our Pie chart the size of 40% the radius
        chart.innerRadius = am4core.percent(40);


        // Add and configure Series
        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "value";
        pieSeries.dataFields.category = "category";
        pieSeries.slices.template.stroke = am4core.color("#fff");
        pieSeries.innerRadius = 20;
        pieSeries.slices.template.fillOpacity = 0.8;

        pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
        pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
        pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";


        // Add data
        pieSeries.data = [{
            "category": "Achived",
            "value": 56,
            "labelDisabled": true
        }, {
            "category": "Targeted",
            "value": 44,
            "labelDisabled": true
        }];

        // Disable sliding out of slices
        pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        pieSeries.slices.template.states.getKey("hover").properties.scale = 1;

        // Add second series
        let pieSeries2 = chart.series.push(new am4charts.PieSeries());
        pieSeries2.dataFields.value = "value";
        pieSeries2.dataFields.category = "category";
        pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        pieSeries2.slices.template.states.getKey("hover").properties.scale = 1;
        pieSeries2.slices.template.propertyFields.fill = "fill";
        pieSeries2.labels.template.propertyFields.disabled = "labelDisabled";
        pieSeries2.ticks.template.propertyFields.disabled = "labelDisabled";
        // Add data
        pieSeries2.data = [{
            "category": "Low Severity",
            "value": 40,
            "labelDisabled": true
        }, {
            "category": "Errors",
            "value": 60,
            "fill": "#ededed",
            "labelDisabled": true
        }];


        pieSeries.adapter.add("innerRadius", function (innerRadius, target) {
            return am4core.percent(40);
        })

        pieSeries2.adapter.add("innerRadius", function (innerRadius, target) {
            return am4core.percent(80);
        })

        // Add label
        chart.innerRadius = 10;
        let label = chart.seriesContainer.createChild(am4core.Label);
        label.text = "40";
        label.horizontalCenter = "middle";
        label.verticalCenter = "middle";
        label.fontSize = 16;

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
                <div id="low-severity" style={{ width: "100%", height: "200px" }} />
            </div>
        )
    }
}
