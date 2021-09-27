import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class AccountactionsTable extends Component {
    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(
            
            {
                data: this.props.data,
                "lengthChange": false,
                "language":{searchPlaceholder: "Search..."},
                columns: [
                    { title: "Account Actions" },
                    { title: "Event count" },
                    { title: "People count" },
                    { title: "Growth%" },

                ]
            }

        )


    }
   

    render() {
        return (
            <div className="table-responsive">
                <table id="#accounts" className="display" width="100%" ref = {el => this.el = el}>
                
                                                        <tbody>
                                                            <tr>
                                                                <td>Sign ups</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>

                                                            </tr>
                                                            <tr>
                                                                <td>Apps launched</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>


                                                            </tr>
                                                            <tr>
                                                                <td>Log ins</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>


                                                            </tr>
                                                            <tr>
                                                                <td>Free trial</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>


                                                            </tr>
                                                            <tr>
                                                                <td>Subscriptions Taken</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>


                                                            </tr>
                                                            <tr>
                                                                <td>Subscriptions cancelled</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>

                                                            </tr>
                                                            <tr>
                                                                <td>App version changed</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>


                                                            </tr>
                                                            <tr>
                                                                <td>Account Logged Out</td>
                                                                <td>1200</td>
                                                                <td>1,038</td>
                                                                <td>45%</td>
                                                            </tr>
                                                            <tr>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                            <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                            <tr>
                                                            <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                                <td>-</td>
                                                            </tr>
                                                        </tbody>
                </table>
            </div>
        )
    }

   
}
