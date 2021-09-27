import React, { Component } from 'react';
import Daterangtimepicker from './Daterangetimepicker';
import CohortGraph from "react-cohort-graph";
import CardAppUsersChart from './Charts/CardAppUsersChart';
import CardActiveusersChart from './Charts/CardActiveusersChart';
import CardNewusersChart from './Charts/CardNewusersChart';
import CardReactivatedusersChart from './Charts/CardReactivatedusersChart';
import CardInstallsChart from './Charts/CardInstallsChart';
import CardUninstallsChart from './Charts/CardUninstallsChart';
import CardAvgtimeChart from './Charts/CardAvgtimeChart';
import CardCrashesandAnrChart from './Charts/CardCrashesandAnrChart';
import AppVersionPieChart from './Charts/AppVersionPieChart';
import DevicePieChart from './Charts/DevicePieChart';
import ModelPieChart from './Charts/ModelPieChart';
import CarrierPieChart from './Charts/CarrierPieChart';
import InstallationsChart from './Charts/InstallationsChart';
import SubscriptionsChart from './Charts/SubscriptionsChart';
import UseractivityChart from './Charts/UseractivityChart';
import CrashesandANRChart from './Charts/CrashesandANRChart';
import UserActivityHeatmapChart from './Charts/UserActivityHeatmapChart';
import LoginFunnelChart from './Charts/LoginFunnelChart';
import DailyconsmptionPieChart from './Charts/DailyconsmptionPieChart';
import AvgtimevisitsPieChart from './Charts/AvgtimevisitsPieChart';
import AccountactionsTable from './Datatable/AccountactionsTable';
import SettingsTable from './Datatable/SettingsTable';
import ErrorKnowmorebutton from './ErrorKnowmorebutton';
import CrashesandANRBarlineChart from './Charts/CrashesandANRBarlineChart';


export default class AccountandUser extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-4 ">
                                    <h1 className="m-0">Account & User</h1>
                                </div>
                                <div className="col-sm-4 mg-b-15">

                                    <div className="plan-filter">
                                        <div class="form-group d-flex top-dropdown-label">
                                            <label className="tx-select">OS</label>
                                            <select class="custom-select required">
                                                <option value="select" disabled selected hidden>Select OS</option>
                                                <option value="android">All</option>
                                                <option value="android">Android</option>
                                                <option value="ios">IOS</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="plan-filter pd-x-20">
                                        <div class="form-group d-flex  top-dropdown-label">
                                            <label className="tx-select">Device</label>
                                            <select class="custom-select required">
                                                <option value="select" disabled selected hidden>Select device</option>
                                                <option value="All">All</option>
                                                <option value="smartphone">Smartphone</option>
                                                <option value="tablet">Tablet</option>
                                                <option value="desktop">Desktop</option>
                                                <option value="tv">TV</option>
                                            </select>
                                        </div>
                                    </div>


                                </div>
                                <div className="col-sm-4 mg-b-15 date-range">
                                    <a href="#" className="">Period &nbsp; | &nbsp;</a>
                                    <div>
                                    <Daterangtimepicker/>
                                    </div>
                                </div>
                            </div>{/* /.row */}
                        </div>{/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}

                    {/* Main content */}
                    <section className="content">
                        <div className="container-fluid">
                            {/* Small boxes (Stat box) */}
                            {/* user analysis section */}
                            <div className="row mg-b-20 fade-in">
                                <div className="col-md-12 mg-b-10"><h4 className="tx-gray tx-upper sub-title">User Analysis</h4></div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Lifetime App Users</p>
                                            <h3 className="pd-t-10">2,300 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                                            <CardAppUsersChart />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Active users</p>
                                            <h3 className="pd-t-10">320 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                                            <CardActiveusersChart />

                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">New users</p>
                                            <h3 className="pd-t-10">210 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>

                                            <CardNewusersChart />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Reactivated Users</p>
                                            <h3 className="pd-t-10">200 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>

                                            <CardReactivatedusersChart />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Installs</p>
                                            <h3 className="pd-t-10">150k <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>

                                            <CardInstallsChart />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Uninstalls</p>
                                            <h3 className="pd-t-10">10k <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>

                                            <CardUninstallsChart />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Avg Time on App (hrs)</p>
                                            <h3 className="pd-t-10">120hrs <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>

                                            <CardAvgtimeChart />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-6">
                                    {/* small box */}
                                    <div className="small-box bg-white">
                                        <div className="inner">
                                            <p className="f-400 tx-small mg-b-0">Crashes & ANR</p>
                                            <h3 className="pd-t-10">135 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>

                                            <CardCrashesandAnrChart />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Main row */}
                            <div className="row fade-in">
                                <section className="col-lg-12 mg-t-20 ">
                                    <div className="col-md-12 mg-b-20"><h4 className="tx-gray tx-upper sub-title">User Characteristics</h4></div>
                                    <div className="row bottom-div">
                                        <div className="col-lg-3 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title">App Version</h3>
                                                </div>
                                                <div className="card-body">
                                                    <AppVersionPieChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title">Device</h3>
                                                </div>
                                                <div className="card-body">
                                                    <DevicePieChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title">Model</h3>
                                                </div>
                                                <div className="card-body">
                                                    <ModelPieChart />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title">Carrier</h3>
                                                </div>
                                                <div className="card-body">
                                                    <CarrierPieChart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="col-lg-12 connectedSortable mg-t-20 fade-in">
                                    <div className="col-md-12 mg-b-20"><h4 className="tx-gray tx-upper sub-title">Daily Trend</h4></div>
                                    {/* Custom tabs (Charts with tabs)*/}
                                    <div className="card">
                                        <div className="card-header">

                                            <div className="col-12 card-tools">
                                                <ul className="nav nav-pills ml-auto top-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link active" href="#installations" data-toggle="tab">Installations</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#subscriptions" data-toggle="tab">Subscriptions</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#user-acivity" data-toggle="tab">User Acivity</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="#crashes-anr" data-toggle="tab">Crashes & ANR</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>{/* /.card-header */}
                                        <div className="card-body">
                                            <div className="tab-content p-0">

                                                <div className="chart tab-pane active tab-container" id="installations" style={{ width: "100%", height: "400px" }}>
                                                    <InstallationsChart />
                                                    {/* /.card-body*/}
                                                </div>

                                                <div className="chart tab-pane tab-container" id="subscriptions" style={{ width: "100%", height: "400px" }}>
                                                    <SubscriptionsChart />
                                                    {/* /.card-body*/}
                                                </div>
                                                <div className="chart tab-pane tab-container" id="user-acivity" style={{ width: "100%", height: "400px" }}>
                                                    <UseractivityChart />
                                                    {/* /.card-body*/}
                                                </div>
                                                <div className="chart tab-pane tab-container" id="crashes-anr" style={{ width: "100%", height: "400px" }}>
                                                <CrashesandANRBarlineChart/>
                                                    {/* /.card-body*/}
                                                </div>
                                            </div>
                                        </div>{/* /.card-body */}
                                    </div>
                                </section>

                                <section className="col-lg-12 mg-t-20 fade-in">
                                    <div className="col-md-12 mg-b-20"><h4 className="tx-gray tx-upper sub-title">User Activity</h4></div>
                                    <div className="row bottom-div">
                                        <div className="col-lg-6 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title"></h3>
                                                </div>
                                                <div className="card-body">
                                                    <UserActivityHeatmapChart />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle">
                                                    <h3 class="card-title"></h3>
                                                    <div className="plan-filter mg-l-20">
                                                        <div class="form-group">
                                                            <select class="custom-select" required>
                                                                <option value="" disabled selected hidden>Select Returning</option>
                                                                <option value="count">Log Ins </option>
                                                                <option value="sale">Free Trials- Conversions </option>
                                                                <option value="count">Subscriptions</option>
                                                                <option value="sale">Purchases/payments </option>
                                                                <option value="count">Uninstall- Re-Installs</option>

                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="plan-filter">
                                                        <div class="form-group">
                                                            <select class="custom-select required">
                                                                <option value="select" disabled selected hidden>Select Period</option>
                                                                <option value="weekly">Weekly </option>
                                                                <option value="monthly">Monthly </option>
                                                                <option value="quarterly">Quarterly</option>

                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="card-body cohort-chart-div">
                                                    <CohortGraph
                                                        data={{

                                                            months: {
                                                                "Jan": [11567, 331, 135, 116, 90, 48, 22],
                                                                "Feb": [11132, 334, 154, 78, 65, 13],
                                                                "Mar": [11497, 340, 111, 66, 20],
                                                                "Apr": [11593, 247, 87, 39],
                                                                "May": [8710, 206, 38],
                                                                "Jun": [7067, 89],

                                                            }
                                                        }}


                                                        defaultValueType={["value"]}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="col-lg-12 mg-t-20 fade-in">
                                    <div className="card">
                                        <div class="card-header ui-sortable-handle">
                                            <h3 class="card-title">Log-ins</h3>
                                            <div className="plan-filter">
                                                <div class="form-group">
                                                    <select class="custom-select required">
                                                    <option value="select" disabled selected hidden>Select...</option>
                                                        <option value="count">Overview 1</option>
                                                        <option value="sale">Overview 1</option>
                                                        <option value="count">Notification/SMS/Emailer</option>
                                                        <option value="sale">Video</option>
                                                        <option value="count">App</option>
                                                        <option value="sale">Subscriptions</option>
                                                        <option value="count">Sign-Up</option>
                                                        <option value="sale">Payment</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <LoginFunnelChart />
                                        </div>
                                    </div>

                                </section>

                                <section className="col-lg-12 mg-t-20">
                                    <div className="row bottom-div">
                                        <div className="col-lg-6 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title">Daily consmption duration</h3>
                                                </div>
                                                <div className="card-body">
                                                    <DailyconsmptionPieChart />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-12">
                                            <div className="card">
                                                <div class="card-header ui-sortable-handle bottom-border">
                                                    <h3 class="card-title">Avg time between visits</h3>
                                                </div>
                                                <div className="card-body">
                                                    <AvgtimevisitsPieChart />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="col-lg-12 mg-t-30">
                                    <div className="col-md-12 mg-b-20"><h4 className="tx-gray tx-upper sub-title">Account Events </h4></div>
                                    <div className="row bottom-div">
                                        <div className="col-lg-6 col-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <AccountactionsTable />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-6">
                                            <div className="card">
                                                <div className="card-body">
                                                    <SettingsTable />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className="col-lg-12 mg-t-30 fade-in">
                                    <div className="col-md-12 mg-b-20"><h4 className="tx-gray tx-upper sub-title">ERRORS </h4></div>
                                    <div className="row bottom-div">

                                        <div className="col-lg-3 col-6">
                                            <div className="small-box bg-white">
                                                <div className="inner tx-center">
                                                    <p className="f-400 tx-small mg-b-0">Total Errors</p>
                                                    <h3 className="pd-t-10">80 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                                                    <div className="error-count">23</div>

                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-6">
                                            <div className="small-box bg-white">
                                                <div className="inner tx-center">
                                                    <p className="f-400 tx-small mg-b-0">High Severity</p>
                                                    <h3 className="pd-t-10">20 <span class="badge bg-danger text-success tx-small badge-span">-10%</span></h3>
                                                    <div className="error-count">12</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-6">
                                            <div className="small-box bg-white">
                                                <div className="inner tx-center">
                                                    <p className="f-400 tx-small mg-b-0">Medium Severity</p>
                                                    <h3 className="pd-t-10">20 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                                                    <div className="error-count">8</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-6">
                                            <div className="small-box bg-white">
                                                <div className="inner tx-center">
                                                    <p className="f-400 tx-small mg-b-0">Low Severity</p>
                                                    <h3 className="pd-t-10">40 <span class="badge bg-success text-success tx-small badge-span">0%</span></h3>
                                                    <div className="error-count">6</div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className="row">
                                        <div className="col-12 mg-b-15 fl-right"> <ErrorKnowmorebutton>
                                            <button className="btn btn-primary btn-sm know-more-bttn fl-right">Know More</button>
                                        </ErrorKnowmorebutton></div>
                                    </div>

                                </section>


                            </div>
                        </div>
                    </section>

                </div>
            </div>
        )
    }
}
