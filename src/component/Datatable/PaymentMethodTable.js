import React, { Component, useState } from 'react';
import axios from 'axios';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class PaymentMethodTable extends Component {
  componentDidMount() {

    axios.get('http://10.0.0.238/icogz/clevertap').then((response) => {
      let table = response.data.data.dataset.data_table;
      if(table !=undefined &&table!=null){
        $(".method_tbody").html("");
        for(var index in table) {
          var list = table[index]
            var tr = '<tr>';
                tr += '<td>'+list['date']+'</td>';       
                tr += '<td>'+list['payment_method']+'</td>';       
                tr += '<td>'+list['event_count']+'</td>';       
                tr += '<td>'+list['people_count']+'</td>';       
                tr += '<td>'+list['success_count']+'</td>';
                tr += '<td>'+list['success %']+'%'+'</td>';      
                tr += '</tr>';

                $(".method_tbody").append(tr);  
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

      }

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
                                      <th>Payments Method</th>
                                      <th>Event count</th>
                                      <th>People count"</th>
                                      <th>Success Count</th>
                                      <th>Success % </th>
                                      
                                    </tr>
                                 </thead>
                                  <tbody class="method_tbody">
                                    

                                  </tbody>
        </table>
      </div>
    )
  }
}
