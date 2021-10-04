import React, { Component, useState } from 'react'; 
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

export default class CampaignsChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      impression_count: '0'
    }
  }

    componentDidMount() {
        am4core.useTheme(am4themes_animated);
        am4core.addLicense("CH258896422");

// Create chart instance
let chart = am4core.create("campaigns-chart", am4charts.XYChart);
axios.get('http://10.0.0.238/icogz/appflyer').then((response) =>{
  let date = response.data.data.data_query_set.all_data;
  let date_count =response.data.data.data_query_set.all_data.length;
  if(date !=undefined &&date!=null)
  {
    var data = [];
            for (var i = 0; i < date_count; i++)
            {
               var info = {
                "ax": date[i][1], 
                "bx": 7000,
                "cx": 8000,
                "dx": 9000,
                "ex": 10000,

                "ay": 10,
                "by": 20,
                "cy": 30,
                "dy": 40,
                "ey": 50
              };
               data.push(info);
            }
            chart.data = data;
  }
})

// Add data

  
  // Create axes
  let xAxis = chart.xAxes.push(new am4charts.ValueAxis());
  xAxis.title.text = 'Impressions';
  xAxis.renderer.grid.template.location = 0;
  xAxis.renderer.minGridDistance = 50;
  //xAxis.renderer.minGridDistance = 30;
  xAxis.tooltip.disabled = true;
  
  let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
  yAxis.renderer.minGridDistance = 50;
  yAxis.cursorTooltipEnabled = false;
  yAxis.title.text = 'CTR%';
  yAxis.renderer.labels.template.adapter.add("text", function(text) {
    return text + "%";
  });

  // Create series
  let series1 = chart.series.push(new am4charts.LineSeries());
  series1.dataFields.valueY = "ay";
  series1.dataFields.valueX = "ax";
  series1.strokeOpacity = 0;
  series1.fill = am4core.color("#3cba54");
  series1.stroke = am4core.color("#3cba54");
  series1.cursorTooltipEnabled = false;
  series1.name = "Google";
  //series1.labels.template.html = "<i class=\"fontawesome-icons\">{icon}</i>";
  
  
  let bullet1 = series1.bullets.push(new am4charts.CircleBullet());
  bullet1.tooltipText = "Google: Impressions: {valueX}, CTR: {valueY}%";
  bullet1.fillOpacity = 0.7;
  bullet1.circle.radius = 10;
  series1.heatRules.push({
    target: bullet1.circle,
    min: 10,
    max: 60,
    property: "radius",
    
   });
  
  // Create series
  let series2 = chart.series.push(new am4charts.LineSeries());
  series2.dataFields.valueY = "by";
series2.dataFields.valueX = "bx";

series2.strokeOpacity = 0;
series2.fill = am4core.color("#3b5998");
series2.stroke = am4core.color("#3b5998");
series2.cursorTooltipEnabled = false;
series2.name = "Facebook";
  
  let bullet2 = series2.bullets.push(new am4charts.CircleBullet());
  bullet2.tooltipText = "Facebook - Impressions: {valueX}, CTR: {valueY}%";
  bullet2.fillOpacity = 0.7;
  bullet2.circle.radius = 10;
  series2.heatRules.push({
    target: bullet2.circle,
    min: 10,
    max: 60,
    property: "radius"
  });

  // Create series
  let series3 = chart.series.push(new am4charts.LineSeries());
  series3.dataFields.valueY = "cy";
  series3.dataFields.valueX = "cx";
  
  series3.strokeOpacity = 0;
  series3.fill = am4core.color("#c1558b");
  series3.stroke = am4core.color("#c1558b");
  series3.cursorTooltipEnabled = false;
  series3.name = "Instagram";
  
  let bullet3 = series3.bullets.push(new am4charts.CircleBullet());
  bullet3.tooltipText = "Instagram - Impressions: {valueX}, CTR: {valueY}%";
  bullet3.fillOpacity = 0.7;
  bullet3.circle.radius = 10;
  series3.heatRules.push({
    target: bullet3.circle,
    min: 10,
    max: 60,
    property: "radius"
  });
  
  // Create series
  let series4 = chart.series.push(new am4charts.LineSeries());
  series4.dataFields.valueY = "dy";
  series4.dataFields.valueX = "dx";
  
  series4.strokeOpacity = 0;
  series4.fill = am4core.color("#00acee");
  series4.stroke = am4core.color("#00acee");
  series4.cursorTooltipEnabled = false;
  series4.name = "Twitter";
  
  let bullet4 = series4.bullets.push(new am4charts.CircleBullet());
  bullet4.tooltipText = "Twitter - Impressions: {valueX}, CTR: {valueY}%";
  bullet4.fillOpacity = 0.7;
  bullet4.circle.radius = 10;
  series4.heatRules.push({
    target: bullet4.circle,
    min: 10,
    max: 60,
    property: "radius"
  });

  // Create series
  let series5 = chart.series.push(new am4charts.LineSeries());
  series5.dataFields.valueY = "ey";
  series5.dataFields.valueX = "ex";
  
  series5.strokeOpacity = 0;
  series5.fill = am4core.color("#0e76a8");
  series5.stroke = am4core.color("#0e76a8");
  series5.cursorTooltipEnabled = false;
  series5.name = "Linkedin";
  
  let bullet5 = series5.bullets.push(new am4charts.CircleBullet());
  bullet5.tooltipText = "Linkedin - Impressions: {valueX}, CTR: {valueY}%";
  bullet5.fillOpacity = 0.7;
  bullet5.circle.radius = 10;
  bullet5.radius = 20;
  series5.heatRules.push({
    target: bullet5.circle,
    min: 10,
    max: 60,
    property: "radius"
  });

  // Add scrollbars
  chart.scrollbarX = new am4core.Scrollbar();
  chart.scrollbarX.disabled = true;

  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.disabled = true;
  
 

  chart.legend = new am4charts.Legend();

  chart.padding(10, 0, 0, 0);
  

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
               <div id="campaigns-chart" style={{ width: "100%", height: "400px" }} /> 
            </div>
        )
    }
}
