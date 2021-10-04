import React, { Component, useState } from 'react'; 
import axios from 'axios';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class GoogleCampaignTable extends Component {
   constructor(props){
    super(props);
    this.state = {
      table_count: '0'
    }
  }
    componentDidMount() {
          axios.get('http://10.0.0.238/icogz/appflyer').then((response) => {
          let table = response.data.data.table.table_data;
          //console.log('params :-'+table);
          //console.log('here is table :-'+table);
          // let data_length =table.length;
          // console.log(data_length);
          $(".google_tbody").html("");

          /*for(var index in table) {
            console.log("=========", table[index]);
            var list = table[index]
            var tr = '<tr>';
                for (var item_index in list) {
                  tr += '<td>'+list[item_index]+'</td>';     
                }
                tr += '</tr>';


                console.log("TR === ", tr);
                $(".google_tbody").append(tr);              

          }*/

          for(var index in table) {
            //console.log("=========", table[index]);
            var list = table[index]
            var tr = '<tr>';
                tr += '<td>'+list['date']+'</td>';       
                tr += '<td>'+list['campaign']+'</td>';       
                tr += '<td>'+list['impression']+'</td>';       
                tr += '<td>'+list['click']+'</td>';       
                tr += '<td>'+list['conversion_rate']+'</td>';
                tr += '<td>'+list['spends']+'</td>';       
                tr += '<td>'+list['install']+'</td>';       
                tr += '</tr>';

                $(".google_tbody").append(tr);              

          }


        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            
            {
                data: this.props.data,
                "lengthChange": false,
                "language":{searchPlaceholder: "Search..."},
                 "paging": true,
                 "pageLength": 5
                // columns: [
                //     { title: "Google Campaigns" },
                //     { title: "Impressions" },
                //     { title: "Clicks" },
                //     { title: "CTR%" },
                //     { title: "Spend" },
                //     { title: "Installs" },
                //    ]
            }
            )
    

        })


    }

  componentWillUnmount() {
    this.$el.DataTables.destroy(true)
  }
  shouldComponentUpdate() {
    return false;
  }
  // ref = {el => this.el = el}
    render() {
        return (
            <div className="table-responsive pd-t-20">
              <table id="#google" className="display" width="100%" ref={el => this.el = el}>
                                 <thead>
                                    <tr>
                                      <th>Date</th>
                                      <th>Campaign</th>
                                      <th>Impressions</th>
                                      <th>Clicks</th>
                                      <th>CTR%</th>
                                      <th>Spends</th>
                                      <th>Install</th>
                                    </tr>
                                 </thead>
                                  <tbody class="google_tbody">
                                    

                                  </tbody>

                </table>  
            </div>
        )
    }
}
