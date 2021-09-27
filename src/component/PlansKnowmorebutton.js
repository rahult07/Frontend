import React, { Component } from 'react';
import HiddenPlansTable from './HiddenPlansTable';

export default class PlansKnowmorebutton extends Component {
  constructor( props ){
    super( props )
    this.state = {show : false};
    this.showHide = this.showHide.bind(this)
}
    render() {
        return (
          <div>
          <button onClick={this.showHide}  className="btn btn-primary btn-sm know-more-bttn fl-right">{this.changeName()}</button>
          {this.state.show && <HiddenPlansTable/>}
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
