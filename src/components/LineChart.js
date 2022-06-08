import React, {useState} from 'react'
import {Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


export default function LineChart(props) {
const [state, setState] = useState({
  

  labels: ['January', 'February', 'March','April', 'May'],
    datasets: [
      {
        
        label: props.title,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        height: '500px',
        width: '1000px',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3,
        tension: 0,
        fill: true,
        data: [22, 18, 60, 22, 80, 33, 56, 37, 18, 79, 50, 80, 89, 48, 16, 5]
       
      },
  
        
 
    ]
  }
  


);
 
  return (
    <div> 
 
<Line
          data={state}
          options={{
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
