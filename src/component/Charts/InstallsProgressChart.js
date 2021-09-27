import React, { Component } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class InstallsProgressChart extends Component {

    componentDidMount() {
        // Themes begin

        am4core.addLicense("CH258896422");
        am4core.useTheme(am4themes_animated);
        
// Themes end

// Create chart instance
let chart = am4core.create("installs-pie", am4charts.PieChart);

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(20);



// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "value";
pieSeries.dataFields.category = "category";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.innerRadius = 10;
pieSeries.slices.template.fillOpacity = 0.8;
pieSeries.slices.template.propertyFields.disabled = "labelDisabled";
pieSeries.labels.template.propertyFields.disabled = "labelDisabled";
pieSeries.ticks.template.propertyFields.disabled = "labelDisabled";


// Add data
pieSeries.data = [{
  "category": "Achived",
  "value": 100,
  "labelDisabled":true
}, {
  "category": "Targeted",
  "value": 0,
  "labelDisabled":true
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
  "category": "achived",
  "value": 100,
  "labelDisabled":true
}, {
  "category": "targeted",
  "value": 0,
  "fill":"#ededed",
  "labelDisabled":true
}];

// Add label
chart.innerRadius = 10;
let label = chart.seriesContainer.createChild(am4core.Label);
label.text = "130%";
label.horizontalCenter = "middle";
label.verticalCenter = "middle";
label.fontSize = 16;


pieSeries.adapter.add("innerRadius", function(innerRadius, target){
  return am4core.percent(40);
})

pieSeries2.adapter.add("innerRadius", function(innerRadius, target){
  return am4core.percent(60);
})






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
                  <div id="installs-pie" className="pie-div"  />
            </div>
        )
    }
}
