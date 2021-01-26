import React, { Component } from 'react';
import Map from './mapa'; 
import api from '../../../services/api';
// import { login } from '../../../services/auth';


   
  // const [clientes, setClientes] = useState([]);
  export default class IndexMapa extends Component {
    state = {
      filmes: [],
    }
  
    async componentDidMount() {
      const response = await api.get('/api/clientes');
      this.setState({ filmes: response.data });
    }
  render() {
    const { filmes } = this.state;
    
    const ltd = filmes.map(filme => (filme.lat));
    const long = filmes.map(filme => (filme.lon));
    const data = filmes.map(item => { return { "lat": item.lon, "lng": item.lat}});
 
    return (
    // <div><h1>sss</h1></div>
    
        <Map center={{ lat: -23.532881, lng: -46.792004 }} zoom={14} positions={data} />
        );
      }
}