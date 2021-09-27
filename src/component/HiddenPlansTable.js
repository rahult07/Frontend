import React, { Component } from 'react';
import PlanpaymentTable from './Datatable/PlanpaymentTable';
import PaymentMethodTable from './Datatable/PaymentMethodTable';

export default class HiddenPlansTable extends Component {
    render() {
        return (
            <div className="col-12 pd-t-20 cl-both">
            <div className="card">
                  <div class="card-header ui-sortable-handle bottom-border">
                  <div className="plan-filter">
                       <div class="form-group d-flex">
                         <label>Channel</label>
                        <select id="selectMe" class="custom-select required">
                        <option value="select"  disabled selected hidden>Select Channel</option>
                          <option value="option1">Paid</option>
                          <option value="option2">Organic</option>
                        </select>
                      </div>
                      <div class="form-group d-flex mg-l-20">
                         <label>Source</label>
                        <select id="selectMe" class="custom-select required">
                        <option value="select"  disabled selected hidden>Select Source</option>
                          <option value="option1">Platforms</option>
                         
                        </select>
                      </div>
                      </div>
                      </div>
                    <div className="card-body">
                      <div id="option1" className="col-12 plan-card group">
                        <div className="col-lg-6 col-12">
                        <PlanpaymentTable/>
                        </div>
                        <div className="col-lg-6 col-12 fade-in">
                        <PaymentMethodTable/>
                        </div>
                      </div>

                      
                  </div>
                  </div>
                  </div>
        )
    }
}
