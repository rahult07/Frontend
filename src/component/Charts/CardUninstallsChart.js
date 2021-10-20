import React, { Component,useState } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';

am4core.useTheme(am4themes_material);
am4core.useTheme(am4themes_animated);

export default class CardUninstallsChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      uninstall_count: '0'
    }
  }
    componentDidMount() {
        am4core.addLicense("CH258896422");

        // Create chart instance
        let chart = am4core.create("uninstalls", am4charts.XYChart);
        axios.get('http://10.0.0.238/icogz/clevertap').then((response) => {
          let uninstall = response.data.data.queryset.data;
          let uninstall_count_total = response.data.data.queryset.total_uninstall;
          //console.log('ppppppppppp'+uninstall_count_total)
          if (uninstall !=undefined &&uninstall!=null)
          {
            var data =[];
            for(var index in uninstall)
            {
              var list =uninstall[index];
              var info = {
                  "date": list['date'],
                  "value":list['uninstall_count']
                };
                data.push(info);
            }
            chart.data =data;
            //console.log('<<<<<<<<<<<<<<<'+install_count_total);
            this.setState({ uninstall_count: uninstall_count_total >100000? (uninstall_count_total/100000)+'L' :uninstall_count_total });
          }
        })
    // Add data
    chart.data = [ {} ];
  
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
                <p className="f-400 tx-small mg-b-0">Uninstalls</p>
                    <h3 className="pd-t-10">{this.state.uninstall_count}<span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                    <div id="uninstalls" style={{ width: "100%", height: "60px" }} /> 
            </div>
        )
    }
}
