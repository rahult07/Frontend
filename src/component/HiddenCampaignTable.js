import React, { Component } from 'react';
import GoogleCampaignTable from './Datatable/GoogleCampaignTable';
import FacebookCampaignTable from './Datatable/FacebookCampaignTable';
import InstagramCampaignTable from './Datatable/InstagramCampaignTable';
import TwitterCampaignTable from './Datatable/TwitterCampaignTable';
import LinkedinCampaignTable from './Datatable/LinkedinCampaignTable';
import OrganicTable from './Datatable/OrganicTable';

export default class HiddenCampaignTable extends Component {
  
    render() {
        return (
            <div className="col-lg-12 pd-t-10 cl-both">
            <div class="card-header ui-sortable-handle bottom-border">
           
           </div>
                  <div id="tbl" className="card">
                  <div className="card-body ">
                      <div className="col-12">
                  <div className="card-tabs">
                          <div className="card-header p-0 pt-1 border-bottom-0">
                           <ul className="nav nav-pills top-nav">
                            <li className="nav-item">
                                <a className="nav-link active"  data-toggle="tab" href="#custom-tabs-three-home">Google</a>
                              </li>
                              
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#custom-tabs-three-profile">Facebook</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#custom-tabs-three-messages">Instagram</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#custom-tabs-three-settings">Twitter</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#custom-tabs-three-contact">Linkedin</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#custom-tabs-three-organic">Organic</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mg-t-20">
                            <div className="tab-content" id="custom-tabs-three-tabContent">
                            <div className="tab-pane active" id="custom-tabs-three-home">
                             <GoogleCampaignTable/>
                              </div>
                            <div className="tab-pane" id="custom-tabs-three-profile">
                              <FacebookCampaignTable/>
                              </div>
                              <div className="tab-pane" id="custom-tabs-three-messages">
                             <InstagramCampaignTable/>
                              </div>
                              <div className="tab-pane" id="custom-tabs-three-settings">
                              <TwitterCampaignTable/>
                              </div>
                              <div className="tab-pane" id="custom-tabs-three-contact">
                             <LinkedinCampaignTable/>
                              </div>
                              <div className="tab-pane" id="custom-tabs-three-organic">
                              <OrganicTable/>
                              </div>
                            </div>
                          </div>
                          {/* /.card */}
                        </div>
                      </div>

                    </div>
                    {/* /.card-body*/}

                  </div>
                
            </div>
        )
    }
}
