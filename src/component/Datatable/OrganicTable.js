import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class OrganicTable extends Component {
  componentDidMount() {
    console.log(this.el)
    this.$el = $(this.el)
    this.$el.DataTable(

      {
        data: this.props.data,
        "lengthChange": false,
        "language": { searchPlaceholder: "Search..." },
        columns: [
          { title: "Organic" },
          { title: "Installs" },
        ]
      }

    )


  }

  componentWillUnmount() {
    this.$el.DataTables.destroy(true)
  }
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="table-responsive pd-t-20">
        <table id="#organic" className="display" width="100%" ref={el => this.el = el}>

          <tbody>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>
            <tr>
              <td>ClientName_Chennai_Display</td>

              <td><span class="tx-blue">1</span></td>
            </tr>

          </tbody>

        </table>
      </div>
    )
  }
}
