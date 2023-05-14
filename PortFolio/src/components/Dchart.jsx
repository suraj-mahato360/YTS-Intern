import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import ChartInfo from './ChartInfo';

const Dchart = (props) => {

    const data = {
        labels: props.labellist,
        datasets: [
          {
            label: `Rating on level of 10` ,
            data: props.datalist,
            backgroundColor: [
                'rgba(52, 235, 229, 0.7)',
                'rgba(52, 235, 156, 0.7)',
                'rgba(52, 168, 235, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(7, 167, 181, 0.7)',
                'rgba(3, 82, 150, 0.7)',
                'rgba(8, 28, 207, 0.7)',
              ],
              borderColor: [
                'rgba(52, 235, 229, 1)',
                'rgba(52, 235, 156, 1)',
                'rgba(52, 168, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(7, 167, 181, 1)',
                'rgba(3, 82, 150, 1)',
                'rgba(8, 28, 207, 1)',
              ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div>
        <ChartInfo Info={props.labellist}/> 
        <ChartInfo Info={props.datalist}/> 
        <Doughnut data={data} />
    </div>
  )
}

export default Dchart
