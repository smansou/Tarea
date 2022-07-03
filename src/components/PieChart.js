import React, { useState, useEffect } from 'react'
import { Bar, Line, Pie, Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart } from 'react-chartjs-2'


export default function PieChart(props) {
  const [state, setState] = useState({
    labels: [],
    datasets: [
      {
        label: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(75, 192, 192, 0.24)'
        ],
        height: '500px',
        width: '500px',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3,
        tension: 0,
        fill: true,
        data: [2, 1]
      },
    ]
  }
  );
  useEffect(() => {
    setState({
      labels: props.dataNamesArray,
      datasets: [
        {
          label: [...props.dataNamesArray],
          backgroundColor: [
            '#ff997b',
            '#193999',
          ],
          height: '500px',
          width: '500px',
          borderColor:'#193999',
          borderWidth: 3,
          tension: 0,
          fill: true,
          data: [...props.dataArray]
        },
      ]
    });
  }, [props]);


  return (
    <div className='chart-wrapper'>
      <Doughnut
        data={state}
        options={{
          title: {
            display: true,
            text: 'Projects & Tasks',
            fontSize: 20
          },
          plugins:{
            legend:{
              display: true,
              position: 'right'
            }
          },
         
          
        }}
      />
    </div>
  )
}
