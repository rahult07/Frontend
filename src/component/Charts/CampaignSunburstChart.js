import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_sunburst from "@amcharts/amcharts4/plugins/sunburst";
import { eventTarget } from '@amcharts/amcharts4/.internal/core/utils/DOM';

export default class CampaignSunburstChart extends Component {
    componentDidMount() {
        am4core.addLicense("CH258896422");
        am4core.useTheme(am4themes_animated);
        // create chart
        let chart = am4core.create("campaign-sunburst", am4plugins_sunburst.Sunburst);
        chart.padding(0, 0, 0, 0);
        chart.radius = am4core.percent(98);

        chart.data = [{
            name: "Google",
            color: am4core.color("#3cba54"),
            children: [
                { name: "Google - Chennai", value1: 415, },
                { name: "Google - Hyderabad", value1: 148 },
                { name: "Google - Pune", value1: 89 },
                { name: "Google - Mumbai", value1: 100 }
            ]
          },
          {
            name: "Facebook",
            color: am4core.color("#3b5998"),
            children: [
              { name: "Facebook - Pune", value1: 135 },
              { name: "Facebook - Hyderabad", value1: 98 },
              { name: "Facebook - National", value1: 100 },
              { name: "Facebook - Chennai", value1: 213 }
            ]
          },
          {
            name: "Instagram",
            color: am4core.color("#c1558b"),
            children: [
                { name: "Instagram - Phase_1", value1: 135 },
                { name: "Instagram - Instastory_School", value1: 98 },
                { name: "Instagram - nstastory_Mar 19", value1: 100 },
                { name: "Instagram - Instastory_Jan 19", value1: 213 }
            ]
          },
          {
            name: "Twitter",
            color: am4core.color("#00acee"),
            children: [{
                name: 'Twitter - Video_Dec 18', value1: 150
               
              }, {
                name: 'Twitter - 3BHK_Phase_18', value1: 100
                
              }
          ]
          },
          {
            name: "LinkedIn",
            color: am4core.color("#0e76a8"),
            children: [
              {
                name: "Linkedin - Testimonial_Video-2",
                value1: 308
              }
            ]
          }];
          
         chart.fontSize = 11;
          chart.innerRadius = am4core.percent(20);
          
          // define data fields
          chart.dataFields.value = "value1";
          chart.dataFields.name = "name";
          chart.dataFields.children = "children";
          chart.dataFields.color = "color";
          
          chart.colors.step = 2;
          
          let level0SeriesTemplate = new am4plugins_sunburst.SunburstSeries();
          chart.seriesTemplates.setKey("0", level0SeriesTemplate)
          
          
          // this makes labels to be hidden if they don't fit
          level0SeriesTemplate.labels.template.truncate = true;
          level0SeriesTemplate.labels.template.hideOversized = true;
          level0SeriesTemplate.showOnInit = false;
          level0SeriesTemplate.usePercentHack = false;
          
          level0SeriesTemplate.radius = am4core.percent(100);
          level0SeriesTemplate.innerRadius = am4core.percent(0);
          
          let selectedState = level0SeriesTemplate.states.create("selected");
          selectedState.properties.opacity = 0.7;
          level0SeriesTemplate.defaultState.properties.radius = am4core.percent(100);
          
          let currentlySelected;
          
          level0SeriesTemplate.slices.template.events.on("over", function(event) {
            if(event.target.dataItem.sunburstDataItem.children){
             event.target.cursorOverStyle = am4core.MouseCursorStyle.pointer;
            }
          })
          
          level0SeriesTemplate.slices.template.events.on("hit", function(event) {
            zoomOutButton.show();
            let hitSlice = event.target;
          
            if (hitSlice.dataItem.sunburstDataItem.children) {
          
              let series = event.target.dataItem.component;
              
              if (!series.dummyData) {
                series.tooltip.disabled = true;
                hitSlice.dataItem.label.radius = (hitSlice.radius - hitSlice.pixelInnerRadius) - 7;
                hitSlice.dataItem.label.bent = true;
                hitSlice.dataItem.label.rotation = -180;
          
                currentlySelected = hitSlice;
                series.dummyData = true;
                series.setState("selected");
                hitSlice.dataItem.sunburstDataItem.series.show();
                series.slices.each(function(slice) {
                  if (slice != event.target) {
                    slice.dataItem.hide();
                  }
                })
              }
              else {
                drillUp(hitSlice);
              }
            }
          })
          
          
          level0SeriesTemplate.labels.template.adapter.add("rotation", function(rotation, target) {
            target.maxWidth = target.dataItem.slice.radius - target.dataItem.slice.innerRadius - 10;
            target.maxHeight = Math.abs(target.dataItem.slice.arc * (target.dataItem.slice.innerRadius + target.dataItem.slice.radius) / 2 * am4core.math.RADIANS);
            return rotation;
          })
          
          let level1SeriesTemplate = level0SeriesTemplate.clone();
          level1SeriesTemplate.hidden = true;
          level1SeriesTemplate.innerRadius = am4core.percent(10);
          chart.seriesTemplates.setKey("1", level1SeriesTemplate)
          level1SeriesTemplate.fillOpacity = 0.75;
          
          let level2SeriesTemplate = level0SeriesTemplate.clone();
          level2SeriesTemplate.hidden = true;
          level2SeriesTemplate.innerRadius = am4core.percent(20);
          chart.seriesTemplates.setKey("2", level2SeriesTemplate)
          
          let zoomOutButton = chart.seriesContainer.createChild(am4core.ZoomOutButton);
          zoomOutButton.visible = false;
          zoomOutButton.horizontalCenter = "middle";
          zoomOutButton.verticalCenter = "middle";
          zoomOutButton.events.on("hit", function() {
            drillUp(currentlySelected)
          })
          
          
          function drillUp(slice) {
            collapse(slice);
            let series = slice.dataItem.component;
            series.tooltip.disabled = false;
            series.dummyData = false;
            series.setState("default");
            
          
            series.slices.each(function(slice) {
                if (slice != EventSource.target) {
                  slice.dataItem.show();
                }
              })
          
            if (series.parentDataItem.seriesDataItem) {
              currentlySelected = series.parentDataItem.seriesDataItem.slice;
            }
            else {
              zoomOutButton.hide();
            }
          }
          
          
          function collapse(slice) {
          
            slice.dataItem.label.bent = false;
            slice.dataItem.label.radius = 10;
          
          
            if (slice.dataItem.sunburstDataItem.children) {
              slice.dataItem.sunburstDataItem.children.each(function(child) {
                child.seriesDataItem.component.setState("hidden");
                collapse(child.seriesDataItem.slice);
              })
            }
          }

         
          
        chart.legend = new am4charts.Legend();
        chart.legend.disabled = true;
        
     }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }


    render() {
        return (
            <div>
               <div id="campaign-sunburst" style={{ width: "100%", height: "400px" }} /> 
            </div>
        )
    }
}
