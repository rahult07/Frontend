import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class LoginFunnelChart extends Component {
    componentDidMount() {
        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end

        let chart = am4core.create("login-funnel", am4charts.SlicedChart);
        chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

        
chart.data = [{
    "name": "Log-ins",
    "value": 600
}, {
    "name": "Video Load",
    "value": 300
}, {
    "name": "Streamed upto 25% pc",
    "value": 200
}, {
    "name": "Streamed upto 50% pc",
    "value": 180
}, {
    "name": "Streamed upto 75% pc",
    "value": 50
}, {
    "name": "Finished Watching",
    "value": 20
}, {
    "name": "Log Out",
    "value": 10
}];

let series = chart.series.push(new am4charts.FunnelSeries());
series.colors.step = 2;
series.dataFields.value = "value";
series.dataFields.category = "name";
series.alignLabels = true;
series.orientation = "horizonvertal";
series.bottomRatio = 1;

chart.legend = new am4charts.Legend();
chart.legend.position = "bottom";

chart.fontSize = 12;
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
                  <div id="login-funnel" style={{ width: "100%", height: "400px" }} />
            </div>
        )
    }
}
