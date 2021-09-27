import React, { Component } from 'react';
import HiddenCampaignTable from './HiddenCampaignTable';

export default class CampaignKnowmorebttn extends Component {
  constructor( props ){
    super( props )
    this.state = {show : false};
    this.showHide = this.showHide.bind(this)
}

    render() {
        return (
          <div>
           <button onClick={this.showHide}  className="btn btn-primary btn-sm know-more-bttn fl-right cl-both">{this.changeName()}</button>
          {this.state.show && <HiddenCampaignTable/>}
        </div>
        );
    }
    changeName(){
      let text = " "
      text += this.state.show === true ? "Close" : "Know More";
      return text;
  }
  showHide(){
      const { show } = this.state;
      this.setState( { show : !show})
  }
}
