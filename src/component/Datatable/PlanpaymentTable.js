import React, { Component, useState } from 'react';
import axios from 'axios';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class PlanpaymentTable extends Component {
  componentDidMount() {
    
    axios.get('http://10.0.0.238/icogz/clevertap').then((response) => {
      let table = response.data.data.data.table_data;
      //console.log('heree :-'+table);
      $(".payment_tbody").html("");
      for(var index in table) {
            //console.log("=========", table[index]);
            var list = table[index]
            var tr = '<tr>';
                tr += '<td>'+list['date']+'</td>';       
                tr += '<td>'+list['payment_plan']+'</td>';       
                tr += '<td>'+list['event_count']+'</td>';       
                tr += '<td>'+list['people_count']+'</td>';       
                tr += '<td>'+list['success_count']+'</td>';
                tr += '<td>'+list['success %']+'%'+'</td>';       
                tr += '<td>'+list['sale']+'</td>';       
                tr += '</tr>';

                $(".payment_tbody").append(tr);              

          }
           console.log(this.el)
    this.$el = $(this.el)
    this.$el.DataTable(

      {
        data: this.props.data,
        "lengthChange": false,
        "language": { searchPlaceholder: "Search..." },
        "paging": true,
        "pageLength": 5

        // columns: [
        //   { title: "Payment Method" },
        //   { title: "Event count" },
        //   { title: "People count" },
        //   { title: "Success Count" },
        //   { title: "Success %" },


        // ]

      })

    })


  }

  componentWillUnmount() {
    this.$el.DataTables.destroy(true)
  }
  shouldComponentUpdate() {
    return false;
  }


  render() {
    return (
      <div className="table-responsive">
        <table id="#accounts" className="display" width="100%" ref={el => this.el = el}>
                            <thead>
                                <tr>
                                      <th>Date</th>
                                      <th>Payments Plan</th>
                                      <th>Event count</th>
                                      <th>People count"</th>
                                      <th>Success Count</th>
                                      <th>Success % </th>
                                      <th>SALE</th>
                                    </tr>
                                 </thead>
                                  <tbody class="payment_tbody">
                                    

                                  </tbody>

         
        </table>
      </div>
    )
  }
}
