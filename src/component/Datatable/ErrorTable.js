import React, { Component } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class ErrorTable extends Component {

    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            
            {
                data: this.props.data,
                "lengthChange": false,
                "language":{searchPlaceholder: "Search..."},
                columns: [
                    { title: "Error Type/ Error" },
                    { title: "Count" },
                    { title: "Growth%" },
                    { title: "Error Severity" },
                    { title: "First day of occourance" },
                    { title: "Last Day of occourance" },
                    { title: "Error Trend" },
                    { title: "App version" },

                ]
            }

        )


    }

componentWillUnmount(){
this.$el.DataTables.destroy(true)
}
shouldComponentUpdate() {
    return false;
  }

    render() {
        return (
            <div className="table-responsive pd-t-20">
                <table id="#error" className="display" width="100%" ref={el => this.el = el}>

                    <tbody>
                        <tr>
                            <td>Account Settings Changed</td>
                            <td>1200</td>
                            <td>30%</td>
                            <td><span class="badge bg-danger d-inherit">High</span></td>
                            <td>01-1-2021</td>
                            <td>04-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>1</td>

                        </tr>
                        <tr>
                            <td>Language Changed</td>
                            <td>1200</td>
                            <td>20%</td>
                            <td><span class="badge  bg-warning d-inherit">Medium</span></td>
                            <td>05-1-2021</td>
                            <td>07-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>2</td>

                        </tr>
                        <tr>
                            <td>Terms of Use Viewed</td>
                            <td>1200</td>
                            <td>15%</td>
                            <td><span class="badge  bg-warning d-inherit">Medium</span></td>
                            <td>06-1-2021</td>
                            <td>07-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Privacy Policy Viewed</td>
                            <td>1200</td>
                            <td>35%</td>
                            <td><span class="badge  bg-success d-inherit">Low</span></td>
                            <td>07-1-2021</td>
                            <td>08-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Help Viewed</td>
                            <td>1200</td>
                            <td>25%</td>
                            <td><span class="badge  bg-warning d-inherit">Medium</span></td>
                            <td>08-1-2021</td>
                            <td>10-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>About clicks</td>
                            <td>1200</td>
                            <td>15%</td>
                            <td><span class="badge  bg-warning d-inherit">Medium</span></td>
                            <td>10-1-2021</td>
                            <td>12-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Contact us Clicks</td>
                            <td>1200</td>
                            <td>31%</td>
                            <td><span class="badge  bg-warning d-inherit">Medium</span></td>
                            <td>12-1-2021</td>
                            <td>13-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Help Clicks</td>
                            <td>1200</td>
                            <td>14%</td>
                            <td><span class="badge bg-success d-inherit">Low</span></td>
                            <td>12-1-2021</td>
                            <td>12-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>FAQ clicks</td>
                            <td>1200</td>
                            <td>42%</td>
                            <td><span class="badge bg-success d-inherit">Low</span></td>
                            <td>13-1-2021</td>
                            <td>13-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>Terms clicks</td>
                            <td>1200</td>
                            <td>26%</td>
                            <td><span class="badge  bg-warning d-inherit">Medium</span></td>
                            <td>14-1-2021</td>
                            <td>14-1-2021</td>
                            <td><Sparklines data={[5, 10, 5, 20]}>
                                <SparklinesLine color="blue" />
                            </Sparklines></td>
                            <td>1</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}
