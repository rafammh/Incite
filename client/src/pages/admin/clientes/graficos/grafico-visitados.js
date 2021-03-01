import React  from 'react';
// import ReactDOM from 'react-dom';
import Chart  from 'react-apexcharts';
import api from '../../../../services/api';
export default class ApexChart extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      series:{},
      options:{}
    } 
  }
  async componentDidMount() {
   await api.get('/api/clientes.grupoIP/10.251.50.116')
    .then(res => {
        const perfil = res.data;
        let ip = [];
        let totvisitas = [];
        perfil.forEach(element => {
          ip.push(element._id.ip);
          totvisitas.push(element.total);
          // console.log(ip);
            //  console.log(totvisitas);   
        });
        this.setState({ 
          options: {
            chart: {
              id: "basic-bar"
            },
            xaxis: {
              categories:ip,  
            }
          },
          series: [
            {       
              name: "Total de visitas",
              data: totvisitas,
            }
          ]
          
         });
        });
      }
      render() {
        // console.log('State1: ', this.state.series.name);
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
