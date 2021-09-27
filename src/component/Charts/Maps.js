import React, { Component } from 'react';
import { GoogleMap } from '@react-google-maps/api';

export default class Maps extends Component {
  componentDidMount() {
     const map = new window.google.maps.Map(document.getElementById('maps'), {
		center: { lat: 18.9067, lng: 72.8147 },
		zoom: 4
    
	});	
	
  }

  render() {
    return (
      <div style={{ width: "100%", height:"300px"}} id="maps" />
    );
  }
}

