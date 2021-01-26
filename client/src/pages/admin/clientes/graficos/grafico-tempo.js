import React from 'react';
import ReactDOM from 'react-dom';
import ReactApexChart from 'react-apexcharts';
import api from '../../../../services/api';
export default class ApexChart extends React.Component {
 
  state = {
    // title: '',
    posts: []
  };
  componentDidMount = () => {
    this.Clientes();
  };


 

  constructor(props) {
    super(props);

    this.state = {

      series: [
        {
          data: [
            {
              x: 'c6:36:96:02:96:b4',
              y: [
                new Date('2020-10-28 10:34:15').getTime(),
                new Date('2020-10-29 10:36:25').getTime()
              ]
            },
            {
              x: '30:cb:f8:16:f0:1b',
              y: [
                new Date('2020-10-26 10:34:15').getTime(),
                new Date('2020-10-27 10:36:15').getTime()
              ]
            },
            {
              x: 'c4:61:8b:aa:ff:43',
              y: [
                new Date('2020-10-24 10:34:15').getTime(),
                new Date('2020-10-25 10:33:15').getTime()
              ]
            },
            {
              x: 'c8:c7:50:a8:37:bb',
              y: [
                new Date('2020-10-16 10:34:15').getTime(),
                new Date('2020-10-18 10:44:15').getTime()
              ]
            }
          ]
        }
      ],
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


    };
  }
  //  constructor(props) {
  //      super(props);

  //      this.state = {

  //        series: [
  //          {
  //            data: []

  //           },
  //           ],

  //        options: {
  //          chart: {
  //            height: 350,
  //            type: 'rangeBar'
  //          },
  //          plotOptions: {
  //            bar: {
  //              horizontal: true
  //            }
  //          },
  //          xaxis: {
  //            type: 'datetime'
  //          }
  //        },
  //     };

  //   }




  Clientes = () => {
    api.get('/api/clientes')
      .then((response) => {
        let datas = response.data;
        datas.map(item => {
          let x = item.mac;
          let y = [new Date('2020-10-16 10:34:15').getTime(), new Date('2020-10-18 10:44:15').getTime()];
          let datae = [{ x, y }];
          // console.log(datae) 
          this.setState({ series: datae });
        });
        console.log('Data has been received!!');
      })
      .catch(() => {
        alert('Error retrieving data!!!');
      });
  }

  displayBlogPost = (posts) => {

    if (!posts.length) return null;


    return posts.map((post, index) => (
      <div key={index} className="blog-post__display">
        {}
        <h3>{post.mac}</h3>
        {/* como percorrer uma matriz */}
        <p>{post.os}</p>
      </div>
    ));
  };


  render() {
    console.log('State1: ', this.state);
    return (
      <div className="app">     
        <React.Fragment>
          <div className="row">
            <div className="mixed-chart">
              <ReactApexChart options={this.state.options} series={this.state.series} type="rangeBar" height={350} />
            </div>
          </div>
        </React.Fragment>
      </div>

    );
  };
}; 
