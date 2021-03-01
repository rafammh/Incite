import React  from 'react';
import ReactDOM from 'react-dom';
import Chart  from 'react-apexcharts';
import api from '../../../../services/api';
export default class ApexChart extends React.Component {
  state = {
    sistemaop: [],
  }
  async componentDidMount() {
    const response = await api.get('/api/clientes.grupoOS/ios');
    this.setState({ sistemaop: response.data });
    // console.log(response.data);
  }
  constructor(props) {
    super(props);
    let { sistemaop } = this.state;
    let Os = sistemaop.map(item => (item._id.os));
    let tot = sistemaop.map(item => (item.total));
    // console.log(sistemaop);
    // console.log(Object.keys(sistemaop));
  
      this.state = {
        options: {
          chart: {
            id: "basic-bar"
          },
          xaxis: {
          
            categories:["Sem dados","iOS","Apple iPhone","Nexus","Android"],
          }
        },
        series: [
          {   
            name: "Total Dispositivos",
            data: [131,21,32,3,311],
          }
        ]
      };
    }
    render() {
  
      return (
         <div className="app">
        <React.Fragment> 
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
         </React.Fragment>
      </div>
       
    );
  };
};
