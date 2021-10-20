import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

export default class ModelPieChart extends Component {
    componentDidMount() {
     // Themes begin
     am4core.useTheme(am4themes_animated);

     // Themes end

     // Create chart instance
     let chart = am4core.create("model-pie", am4charts.PieChart);
     axios.get('http://10.0.0.238/icogz/clevertap').then((response) => {
        let model_name= response.data.data.model_name.all_model;
        if (model_name !=undefined &&model_name!=null)
        {
            var data =[];
            for(var index in model_name)
            {
                var list = model_name[index];
                var info={
                    "plan": list['models'],
                    "count": list['count_model']
                };
                data.push(info);
            }
            chart.data=data;
        }


      })

         
// Add data
chart.data = [ {}];

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

pieSeries.colors.list = ["#d23924", "#ee5844", "#f06958", "#f78677", "#fc9688"].map(function(color) {
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
                 <div id="model-pie" style={{ width: "100%", height: "200px" }} />
           </div>
       )
   }
}
