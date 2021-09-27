import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class PlanpaymentTable extends Component {
  componentDidMount() {
    console.log(this.el)
    this.$el = $(this.el)
    this.$el.DataTable(

      {
        data: this.props.data,
        "lengthChange": false,
        "language": { searchPlaceholder: "Search..." },
        columns: [
          { title: "Payments Plan" },
          { title: "Event count" },
          { title: "People count" },
          { title: "Success Count" },
          { title: "Success %" },
          { title: "SALE" },

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
              <td>Plan 1</td>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Plan 2</td>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
              <td>5000</td>
            </tr>
            <tr className="odd">
              <td>Plan 3</td>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Plan 4</td>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
              <td>5000</td>
            </tr>
            <tr className="odd">
              <td>Plan 5</td>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Plan 6</td>
              <td>20</td>
              <td>5</td>
              <td>10</td>
              <td className="white-space">50%
                <div className="progress">
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} style={{ width: '50%' }}>
                    50%
                  </div>
                </div>

              </td>
              <td>5000</td>
            </tr>

          </tbody>
        </table>
      </div>
    )
  }
}
