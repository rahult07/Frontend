import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class PaymentMethodTable extends Component {
  componentDidMount() {
    console.log(this.el)
    this.$el = $(this.el)
    this.$el.DataTable(

      {
        data: this.props.data,
        "lengthChange": false,
        "language": { searchPlaceholder: "Search..." },
        columns: [
          { title: "Payment Method" },
          { title: "Event count" },
          { title: "People count" },
          { title: "Success Count" },
          { title: "Success %" },


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
      <div className="table-responsive">
        <table id="#accounts" className="display" width="100%" ref={el => this.el = el}>
          <tbody>
            <tr className="odd">
              <td>CC</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <td>DC</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
            </tr>
            <tr className="odd">
              <td>UPI</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <td>Wallet</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
            </tr>
            <tr className="odd">
              <td>Paytm</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
            </tr>
            <tr>
              <td>Google Pay</td>
              <td>10</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}
