import React, { Component } from "react";

import ReactApexChart from 'react-apexcharts'

 class ApexChart extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
          
            series: [{
              name: 'Labor',
              data: [486,488,555,539,615,600,600]
            }, {
              name: 'Sales',
              data: [486,520,400,785,949,1000,1000]
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