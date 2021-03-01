import React from 'react';
import ReactApexChart from 'react-apexcharts';
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
    const res = await api.get('/api/clientes.diferencadata')
    .then(res => {
        const tempo = res.data;
        let mac1 = [];
        let datai = [];
        let dataf = [];
        tempo.forEach(element => {
          mac1.push(element._id.mac);
          datai.push(element.firstSeen);
          dataf.push(element.lastSeen);
        });
        this.setState =( {
          options: {
            chart: {
              height: 350,
              type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          type: 'datetime'
        }
          },     
          series: [
            {
              data: [
                {
                  x: mac1,
                  y: [
                    datai,
                    dataf
                  ]
                }
              ]
            }
          ]
        });
  });
}
  render() {
    // console.log('State1: ', mac1);
    return (
      <div className="app">     
        <React.Fragment>
          <div className="row">
            <div className="mixed-chart">
              <ReactApexChart 
              options={this.state.options} 
              series={this.state.series} 
              height={350} 
              />
            </div>
          </div>
        </React.Fragment>
      </div>

    );
  };
}; 
