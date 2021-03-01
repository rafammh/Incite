
import React, { Component } from 'react';
import Map from './mapa';

const data = [
  { lat: -23.532881, lng: -46.792004 },
  { lat: -23.532200, lng: -46.781681 },
  { lat: -23.532681, lng: -46.782104 },
  { lat: -23.532281, lng: -46.792084 },

  { lat: -23.532881, lng: -46.792005 }
];
 
export default class IndexMapa extends Component {
  render() {
    return (    <React.Fragment>
      <Map center={{ lat: -23.532881, lng: -46.792004 }} zoom={14} positions={data} />
      </React.Fragment>);
  }
}
 