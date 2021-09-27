import React, { Component,useState } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import axios from 'axios';
import GrowthSortedBarChart from './GrowthSortedBarChart';


export default class SpendsBarChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            spend_count: '0'
        }
    }

  componentDidMount() {

    am4core.addLicense("CH258896422");

    am4core.useTheme(am4themes_animated);
    // Create chart instance

    let chart = am4core.create("overview-spends", am4charts.XYChart);
    axios.get('http://10.0.0.238/icogz/appflyer').then((response) => {
        let total_spend = response.data.data.data.spends_count
        let achived = (total_spend*1.2)/100
        let percent = total_spend.toFixed(2) /achived 
        if(response.data.data.data.spends_count !=undefined &&response.data.data.data.spends_count!=null)
        {
            this.setState({ spend_count: total_spend >100000? (total_spend/100000).toFixed(2) +'L' :total_spend });
            chart.data = [{
            "year": "2021",
            "targeted":"100 %",
            "achived" :percent
          }];

        }
    });


// Add data
chart.data = [{}];
    
  
  // Create axes
  let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 0;
categoryAxis.tooltip.disabled = true;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.fontWeight = 800;
valueAxis.renderer.labels.template.disabled = true;
valueAxis.cursorTooltipEnabled = false;
valueAxis.renderer.minGridDistance = 20;
  
  
  // Do not crop bullets
  chart.maskBullets = false;
  
  // Remove padding
  chart.paddingBottom = 0;
  
  // Create series
  let series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = "targeted";
  series.dataFields.categoryX = "year";
  series.clustered = false;
  series.tooltipText = "Users in {categoryX} (targeted): [bold]{valueY}";
  series.fill = am4core.color("#902c2d");
  series.stroke = am4core.color("#902c2d");
  series.columns.template.width = 25
  
  let series2 = chart.series.push(new am4charts.ColumnSeries());
  series2.dataFields.valueY = "achived";
  series2.dataFields.categoryX = "year";
  series2.clustered = false;
  series2.columns.template.width = am4core.percent(50);
  series2.calculatePercent = true;
  series2.tooltipText = "Users in {categoryX} (achived): [bold]{valueY.percent}%";
  series2.fill = am4core.color("#f05440");
  series2.stroke = am4core.color("#f05440");
  series2.columns.template.width = 15
  
  
  chart.cursor = new am4charts.XYCursor();
  chart.cursor.lineX.disabled = true;
  chart.cursor.lineY.disabled = true;
  
  valueAxis.renderer.grid.template.disabled = true;
  categoryAxis.renderer.grid.template.disabled = true;

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
            <div className="row impression-chart">
                        <div className="col-lg-6 col-6">
                          <p className="f-400 tx-small mg-b-0">Spends</p>
                          <h3 className="pd-t-10">{this.state.spend_count}<span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                        </div>
                        <div className="col-lg-6 col-6">
                          <GrowthSortedBarChart/>
                        </div>
                      </div>
                  <div id="overview-spends" style={{ width: "100%", height: "100px" }} />
            </div>
        )
    }
}

