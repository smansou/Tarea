import React, {useState} from 'react'
import {Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


export default function LineChart(props) {
const [state, setState] = useState({
  

  labels: ['January', 'February', 'March','April', 'May'],
    datasets: [
      {
        
        label: 'Rainfall',
        backgroundColor: 'rgba(115,100,23,0.2)',
        height: '150px',
        width: '100px',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 1,
        tension: 0.2,
        fill: true,
        data: [65, 59, 80, 81, 56],
       
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
