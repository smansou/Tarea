import React, {useState} from 'react'
import {Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


export default function BarChart(props) {
const [state, setState] = useState({
  

  labels: ['Week 1', 'Week 2', 'Week 3','Week 4'],
    datasets: [
      {
        
        label: props.title,
        backgroundColor: [
            'rgba(255, 99, 132, 0.4)',
            'rgba(54, 162, 235, 0.4)',
            'rgba(255, 206, 86, 0.4)',
            'rgba(75, 192, 192, 0.24)'
        ],
        height: '150px',
        width: '100px',
        borderColor: 'rgb(218,222,231)',
        borderWidth: 2,
        tension: 0.2,
        fill: props.fill,
        data: [65, 59, 80, 81, 56],
       
      },
  
        
 
    ]
  }
  


);
 
  return (
    <div className='bar-chart'> 
 
<Bar
          data={state}
          options={{
              responsive: true,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
            
          }}
        />
        
    </div>
  )
}
