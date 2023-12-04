import React, { Component } from "react";

import ReactApexChart from 'react-apexcharts'

 class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Labor',
              data: [31, 40, 28, 51, 42, 109, 100]
            }, {
              name: 'Profit',
              data: [11, 32, 45, 32, 34, 52, 41]
            }],
            options: {
              chart: {
                height: 350,
                type: 'area'
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'smooth'
              },
              xaxis: {
                type: 'datetime',
                categories: ["12/1", "12/2", "12/3", "12/4", "12/5", "12/6", "12/7"]
              },
              tooltip: {
                x: {
                  format: 'dd/MM/yy HH:mm'
                },
              },
            },
          
          
          };
        }

      

        render() {
          return (
            

      <div id="chart">
  <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
</div>
          );
        }
        }
export default ApexChart;