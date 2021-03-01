
import React, { Component } from 'react';
import Map from './mapa';
import api from '../../../services/api';
// const data = [];
export default class IndexMapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [],
     
    }
  }

  componentDidMount() {
    api.get('/api/clientes.coordenada')
        .then(res => {
            const local = res.data; 
            console.log(res.data);  
            this.setState({ 
                position: res.data.map(m => { return {
                        lat: m.lat,    
                        lng: m.lon    
                    }}) 
            });
    });
  }
  render() {
    return (<React.Fragment>
      <Map center={{ lat: -23.532881, lng: -46.792004 }} zoom={14} positions={this.state.position} />
    </React.Fragment>);
  }
}
