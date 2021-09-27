import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class SubscriptionsChart extends Component {
    componentDidMount() {

        am4core.addLicense("CH258896422");

        am4core.useTheme(am4themes_animated);
        // Create chart instance

        let chart = am4core.create("subscriptions", am4charts.XYChart);

        chart.colors.step = 2;

        chart.legend = new am4charts.Legend()
        chart.legend.position = 'bottom'
        chart.legend.labels.template.maxWidth = 95
        
        let xAxis = chart.xAxes.push(new am4charts.CategoryAxis())
        xAxis.dataFields.category = 'date'
        xAxis.renderer.cellStartLocation = 0.1
        xAxis.renderer.cellEndLocation = 0.9
        xAxis.renderer.grid.template.location = 0;
        xAxis.renderer.minGridDistance = 10;
        
        let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
      
        
        
        function createSeries(value, name) {
            let series = chart.series.push(new am4charts.ColumnSeries())
            series.dataFields.valueY = value
            series.dataFields.categoryX = 'date'
            series.name = name
            series.columns.template.tooltipText = "{name}: {categoryX}: [bold]{valueY}[/]";
        
          series.events.on("hidden", arrangeColumns);
          series.events.on("shown", arrangeColumns);
          series.columns.template.width = 25

            return series;
        }
        
        chart.data = [
            {
                date: 'Jan 1',
                netsubscriptions: 350,
                new: 320,
                lapsed: -30
            },
            {
              date: 'Jan 2',
              netsubscriptions: 300,
              new: 290,
              lapsed: -10
            },
            {
              date: 'Jan 3',
              netsubscriptions: 380,
              new: 365,
              lapsed: -15
            },
            {
              date: 'Jan 4',
              netsubscriptions: 450,
              new: 390,
              lapsed: -30
            },
            {
              date: 'Jan 5',
              netsubscriptions: 220,
              new: 210,
              lapsed: -10
            },
            {
              date: 'Jan 6',
              netsubscriptions: 260,
              new: 140,
              lapsed: -20
            },
            {
              date: 'Jan 7',
              netsubscriptions: 460,
              new: 400,
              lapsed: -30
            },
            {
              date: 'Jan 8',
              netsubscriptions: 340,
              new: 320,
              lapsed: -20
            },
            {
              date: 'Jan 9',
              netsubscriptions: 520,
              new: 500,
              lapsed: -20
            },
            {
              date: 'Jan 10',
              netsubscriptions: 480,
              new: 450,
              lapsed:-30
            }
          
        ]
        
        chart.colors.list = [
          am4core.color("#902c2d"),
          am4core.color("#fd7c6b"),
          am4core.color("#f05440"),
          
        ];

        createSeries('netsubscriptions', 'Net Subscriptions');
        createSeries('new', 'New ');
        createSeries('lapsed', 'Lapsed');
        
      // Remove padding
      chart.paddingBottom = 0;
        
        function arrangeColumns() {
        
            let series = chart.series.getIndex(0);
        
            let w = 1 - xAxis.renderer.cellStartLocation - (1 - xAxis.renderer.cellEndLocation);
            if (series.dataItems.length > 1) {
                let x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
                let x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
                let delta = ((x1 - x0) / chart.series.length) * w;
                if (am4core.isNumber(delta)) {
                    let middle = chart.series.length / 2;
        
                    let newIndex = 0;
                    chart.series.each(function(series) {
                        if (!series.isHidden && !series.isHiding) {
                            series.dummyData = newIndex;
                            newIndex++;
                        }
                        else {
                            series.dummyData = chart.series.indexOf(series);
                        }
                    })
                    let visibleCount = newIndex;
                    let newMiddle = visibleCount / 2;
        
                    chart.series.each(function(series) {
                        let trueIndex = chart.series.indexOf(series);
                        let newIndex = series.dummyData;
        
                        let dx = (newIndex - trueIndex + middle - newMiddle) * delta
        
                        series.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                        series.bulletsContainer.animate({ property: "dx", to: dx }, series.interpolationDuration, series.interpolationEasing);
                    })
                }
            }
        }



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
                  <div id="subscriptions" style={{ width: "100%", height: "400px" }} />
            </div>
        )
    }
}
