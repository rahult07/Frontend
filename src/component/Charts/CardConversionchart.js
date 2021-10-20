import React, { Component, useState } from 'react'; 
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

export default class CardConversionchart extends Component {
  constructor(props){
    super(props);
    this.state = {
      conversion_count: '0'
    }
  }

 componentDidMount() {

  am4core.addLicense("CH258896422");

 // Create chart instance
 let chart = am4core.create("conversioncard", am4charts.XYChart);
 axios.get('http://10.0.0.238/icogz/appflyer').then((response) => 
        {
          let date = response.data.data.data_query_set.all_data;
          let date_count =response.data.data.data_query_set.all_data.length;
          let total_conversion = response.data.data.data_query_set.conversion_rate+'%'
          //alert(total_conversion)
          if(total_conversion !=undefined &&total_conversion!=null)
          {
            this.setState({ conversion_count: total_conversion >100? (total_conversion/100) +'%' :total_conversion });
            var data = [];
            for (var i = 0; i < date_count; i++)
            {
              var percent = (date[i][4]*100) /date[i][2]
              //console.log(percent);
               var info = {
                "date":date[i][0],
                "value":percent
               };
               data.push(info);
            }
            chart.data = data;
          

          }
        });

// Add data
chart.data = [{}];
  
  // Create axes
  let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.minGridDistance = 50;
  
  let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  
  // Create series
  let series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = "value";
  series.dataFields.dateX = "date";
  series.strokeWidth = 2;
  series.fillOpacity = 0.1;
  series.tooltipText = "{dateX}: {valueY}";
  
  // Add vertical scrollbar
  chart.scrollbarY = new am4core.Scrollbar();
  chart.scrollbarY.marginLeft = 0;
  
  // Add cursor
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.behavior = "zoomY";
  chart.cursor.lineX.disabled = true;

  dateAxis.renderer.grid.template.disabled = true;
dateAxis.renderer.labels.template.disabled = true;
// ...
valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.baseGrid.disabled = true;
valueAxis.renderer.labels.template.disabled = true;

dateAxis.cursorTooltipEnabled = false;
// ...
valueAxis.cursorTooltipEnabled = false;

chart.scrollbarY.disabled = true;

chart.cursor.lineY.disabled = true;

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
            <p className="f-400 tx-small mg-b-0">Conversion Rate</p>
                      <h3 className="pd-t-10">{this.state.conversion_count} <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                     
            <div id="conversioncard" style={{ width: "100%", height: "60px"  }} />     
            </div>
        )
    }
}
