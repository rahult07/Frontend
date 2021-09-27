import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


export default class TreeMapChart extends Component {
    componentDidMount() {

        am4core.addLicense("CH258896422");

        // Themes begin
        am4core.useTheme(am4themes_animated);
        // Themes end
 // create chart
 let chart = am4core.create("treemap", am4charts.TreeMap);
 chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect




chart.data = [{
  "name": "Plan - 1",
 
  "children": [
    {
      "name": "Credit Card", "value": 887
      
    },
    {
      "name": "Debit Card", "value": 587
      
    },
    {
      "name": "UPI Payment", "value": 700
      
    },{
      "name": "Wallet", "value": 456
      
    }
  ]
}, {
  "name": "Plan - 2",
 
  "children": [
    {
      "name": "Credit Card", "value": 600
      
    },
    {
      "name": "Debit Card", "value": 540
      
    },
    {
      "name": "UPI Payment", "value": 430
      
    },
  ]
},{
  "name": "Plan - 3",
 
  "children": [
    {
      "name": "Credit Card", "value": 550
      
    },
    {
      "name": "Debit Card", "value": 480
      
    },
    {
      "name": "UPI Payment", "value": 360
      
    },
  ]
}, {
  "name": "Plan - 4",
 
  "children": [
    {
      "name": "Credit Card", "value": 690
      
    },
    {
      "name": "Debit Card", "value": 580
      
    },
    {
      "name": "UPI Payment", "value": 390
      
    },{
      "name": "Wallet", "value": 440
      
    }
  ]
},{
  "name": "Plan - 5",
 
  "children": [
    {
      "name": "Credit Card", "value": 600
      
    }
  ]
}];

 /* Set color step */
 chart.colors.step = 1;

 chart.maxLevels = 1; 

// define data fields
chart.dataFields.value = "value";
chart.dataFields.name = "name";
chart.dataFields.children = "children";

// level 0 series template
let level1 = chart.seriesTemplates.create("0");
let level1_bullet = level1.bullets.push(new am4charts.LabelBullet());

level1_bullet.locationY = 0.5;
level1_bullet.locationX = 0.5;
level1_bullet.label.text = "{name}";
level1_bullet.label.fill = am4core.color("#fff");

// level 2 series template
let level2 = chart.seriesTemplates.create("1");
let level2_bullet = level2.bullets.push(new am4charts.LabelBullet());

level2_bullet.locationY = 0.5;
level2_bullet.locationX = 0.5;
level2_bullet.label.text = "{name}";
level2_bullet.label.fill = am4core.color("#fff");

// level 3 series template
let level3 = chart.seriesTemplates.create("2");
let level3_bullet = level3.bullets.push(new am4charts.LabelBullet());
level3_bullet.locationY = 0.5;
level3_bullet.locationX = 0.5;
level3_bullet.label.text = "{name}";
level3_bullet.label.fill = am4core.color("#fff");

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
                <div id="treemap" style={{ width: "100%", height: "269px" }} />
            </div>
        )
    }
}
