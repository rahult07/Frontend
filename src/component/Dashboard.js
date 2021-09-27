import React, { Component } from 'react';
import Daterangtimepicker from './Daterangetimepicker';
import LineChart from '../component/Charts/LineChart';
import Map from '../component/Charts/Map';
import ConversionChart from '../component/Charts/ConversionChart';
import ClicksChart from '../component/Charts/ClicksChart';
import InstallChart from '../component/Charts/InstallChart';
import CardAreachart from '../component/Charts/CardAreachart';
import CardClickschart from '../component/Charts/CardClickschart';
import CardConversionchart from '../component/Charts/CardConversionchart';
import CardInstallchart from '../component/Charts/CardInstallchart';
import InstallsBarChart from '../component/Charts/InstallsBarChart';
import UsersBarChart from '../component/Charts/UsersBarChart';
import SpendsBarChart from '../component/Charts/SpendsBarChart';
import GrowthmeterChart from './Charts/GrowthmeterChart';
import UsersProgressChart from '../component/Charts/UsersProgressChart';
import SpendsProgressChart from '../component/Charts/SpendsProgressChart';
import SalesPieChart from '../component/Charts/SalesPieChart';
import PurchaseHeatChart from '../component/Charts/PurchaseHeatChart';
import TreeMapChart from './Charts/TreeMapChart';
import PlansKnowmorebutton from './PlansKnowmorebutton';
import CampaignKnowmorebttn from './CampaignKnowmorebttn';
import GrowthSortedBarChart from './Charts/GrowthSortedBarChart';
import CampaignsChart from './Charts/CampaignsChart';

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6 ">
                  <h1 className="m-0">Promotion & Plans</h1>
                </div>

                <div className="col-sm-6 mg-b-15 date-range">
                  <a href="#" className="">Period &nbsp; | &nbsp;</a>
                  <div>  
                 <Daterangtimepicker/>
                </div>
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}


          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              {/* overview section */}
              <div className="row mg-b-20 fade-in">
                <div className="col-md-12 mg-b-10"><h4 className="tx-gray tx-upper sub-title">Overview</h4></div>
                <div className="col-lg-4 col-12">
                  {/* small box */}
                  <div className="small-box overview-card">
                    <div className="inner">
                      
                      <InstallsBarChart />

                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  {/* small box */}
                  <div className="small-box overview-card">
                    <div className="inner">
                      <div className="row impression-chart">
                        <div className="col-lg-6 col-6">
                          <p className="f-400 tx-small mg-b-0">Users</p>
                          <h3 className="pd-t-10">2,450 <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                        </div>
                        <div className="col-lg-6 col-6">
                       
                        </div>
                      </div>
                      <UsersBarChart />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  {/* small box */}
                  <div className="small-box overview-card">
                    <div className="inner">
                      

                      <SpendsBarChart />

                    </div>
                  </div>
                </div>
              </div>

              {/* app pramotion section */}
              <div className="row  mg-t-20  fade-in">
                <div className="col-md-12 mg-b-10"><h4 className="tx-gray tx-upper sub-title">App Promotions</h4></div>
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      
                      <CardAreachart />

                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                        <CardClickschart />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      
                      <CardInstallchart />
                    </div>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  <div className="small-box bg-white">
                    <div className="inner">
                      <p className="f-400 tx-small mg-b-0">Conversion Rate</p>
                      <h3 className="pd-t-10">50% <span class="badge bg-success text-success tx-small badge-span">5%</span></h3>
                      <CardConversionchart />
                    </div>
                  </div>
                </div>
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row fade-in">
                {/* Left col */}
                <section className="col-lg-12 connectedSortable mg-t-20">
                  {/* Custom tabs (Charts with tabs)*/}
                  <div className="card">
                    <div className="card-header">

                      <div className="col-12 card-tools">
                        <ul className="nav nav-pills ml-auto top-nav">
                          <li className="nav-item">
                            <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Impressions</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#sales-chart" data-toggle="tab">Clicks</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#conversion-chart" data-toggle="tab">Conversion Rate</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#install-chart" data-toggle="tab">Installs</a>
                          </li>
                        </ul>
                      </div>
                    </div>{/* /.card-header */}
                    <div className="card-body">
                      <div className="tab-content p-0">

                        <div className="chart tab-pane active tab-container" id="revenue-chart">
                          <div className="row">
                            <div className="col-lg-7 col-12">
                              <LineChart />
                            </div>
                            <div className="col-lg-5 col-12">
                              <Map />
                            </div>
                          </div>
                          {/* /.card-body*/}
                        </div>

                        <div className="chart tab-pane tab-container" id="sales-chart">
                          <div className="row">
                            <div className="col-lg-7 col-12">
                              <ClicksChart />
                            </div>
                            <div className="col-lg-5 col-12">

                            </div>
                          </div>
                          {/* /.card-body*/}
                        </div>
                        <div className="chart tab-pane tab-container" id="conversion-chart">
                          <div className="row">
                            <div className="col-lg-7 col-12">
                              <ConversionChart />
                            </div>
                            <div className="col-lg-5 col-12">

                            </div>
                          </div>
                          {/* /.card-body*/}
                        </div>
                        <div className="chart tab-pane tab-container" id="install-chart">
                          <div className="row">
                            <div className="col-lg-7 col-12">
                              <InstallChart />
                            </div>
                            <div className="col-lg-5 col-12">

                            </div>
                          </div>
                          {/* /.card-body*/}
                        </div>
                      </div>
                    </div>{/* /.card-body */}
                  </div>
                </section>

                  <section className="col-lg-12 mg-t-20">
                   <div className="card">
                        <div class="card-header ui-sortable-handle bottom-border">
                          <h3 class="card-title">Campaigns</h3></div>
                        <div className="card-body">
                          <div className="col-lg-12">
                          <CampaignsChart/>
                          </div>
                          <div className="col-lg-12">
                          <CampaignKnowmorebttn/>
                          </div>
                        </div>
                      </div>
                  </section>

                 
                <section className="col-lg-12 mg-t-40 fade-in">
                  <div className="col-md-12 mg-b-20"><h3 className="tx-gray tx-upper sub-title">Plan & Payment Overview</h3></div>
                  <div className="row bottom-div mg-t-20">
                    <div className="col-lg-4 col-12">
                      <div className="card">
                        <div class="card-header ui-sortable-handle bottom-border">
                          <h3 class="card-title">Plan Split</h3>
                          <div className="pie-filter">
                            <div class="form-group">
                              <select class="custom-select required">
                                <option value="select" disabled selected hidden>Select...</option>
                                <option value="count">Count</option>
                                <option value="sale">Sale</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <SalesPieChart />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-12">
                      <div className="card">
                        <div class="card-header ui-sortable-handle bottom-border">
                          <h3 class="card-title pd-b-10"> Purchase Tracker</h3>
                        </div>
                        <div className="card-body">
                          <PurchaseHeatChart />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-12">
                      <div className="card">
                        <div class="card-header ui-sortable-handle bottom-border">
                          <h3 class="card-title">Plan & Payment Split</h3>
                          <div className="pie-filter">
                            <div class="form-group">
                              <select class="custom-select required">
                                <option value="select" disabled selected hidden>Select...</option>
                                <option value="sale">Sale</option>
                                <option value="transaction">Transaction</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <TreeMapChart />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mg-b-15 fl-right">
                      <PlansKnowmorebutton>
                        <a className="btn btn-primary btn-sm know-more-bttn fl-right">Know More</a>
                      </PlansKnowmorebutton>
                    </div>
                   
                  </div>
                
                </section>
               

              </div>
              {/* /.row (main row) */}
            </div>{/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
</div>
      </div>
    )
  }
}
