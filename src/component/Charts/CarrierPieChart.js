import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

export default class CarrierPieChart extends Component {
    componentDidMount() {// Themes begin
        am4core.useTheme(am4themes_animated);
   
        // Themes end
   
        // Create chart instance
        let chart = am4core.create("carrier-pie", am4charts.PieChart);
   
            
   // Add data
   chart.data = [ {
    "plan": "A",
    "count": 401
   }, {
    "plan": "B",
    "count": 200
   },{
    "plan": "C",
    "count": 110
   }, {
    "plan": "D",
    "count": 289
   }, {
    "plan": "E",
    "count": 156
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
   pieSeries.labels.template.bent = true;
   pieSeries.labels.template.text = "{category} {value.percent.formatNumber('#.0')}%";
   pieSeries.labels.template.radius = am4core.percent(-40);
   pieSeries.labels.template.fill = am4core.color("white");

   pieSeries.colors.list = ["#d23924", "#f06958", "#fc9688", "#ee5844", "#f78677"].map(function(color) {
    return new am4core.color(color);
  });
  
        chart.legend = new am4charts.Legend();
        chart.legend.position = "bottom";
        chart.legend.valueLabels.template.disabled = true;
        let markerTemplate = chart.legend.markers.template;
        markerTemplate.width = 12;
        markerTemplate.height = 12;

   chart.fontSize = 11;
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
                    <div id="carrier-pie" style={{ width: "100%", height: "200px" }} />
              </div>
          )
      }
}
