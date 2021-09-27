import React, { Component } from 'react';
const $ = require('jquery')
$.DataTable = require('datatables.net')

export default class SettingsTable extends Component {

    componentDidMount() {
        console.log(this.el)
        this.$el = $(this.el)
        this.$el.DataTable(

            {
                data: this.props.data,
                "lengthChange": false,
                "language": { searchPlaceholder: "Search..." },

                columns: [
                    { title: "Settings & Click Actions" },
                    { title: "Event count" },
                    { title: "People count" },
                    { title: "Growth%" },

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
                <table id="#settings" className="display" width="100%" ref={el => this.el = el}>

                    <tbody>
                        <tr>
                            <td>Account Settings Changed</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>

                        </tr>
                        <tr>
                            <td>Language Changed</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>


                        </tr>
                        <tr>
                            <td>Terms of Use Viewed</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>


                        </tr>
                        <tr>
                            <td>Privacy Policy Viewed</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>


                        </tr>
                        <tr>
                            <td>Help Viewed</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>


                        </tr>
                        <tr>
                            <td>About clicks</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>

                        </tr>
                        <tr>
                            <td>Contact us Clicks</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>


                        </tr>
                        <tr>
                            <td>Help Clicks</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>FAQ clicks</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>Terms clicks</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>More Menu Clicks</td>
                            <td>1200</td>
                            <td>1,038</td>
                            <td>45%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
