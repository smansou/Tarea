import React from 'react'
import BarChart from './BarChart'
import NotePad from './Homepage/Notepad'
import LineChart from './LineChart'
import List from './List'

export default function Overview() {
  return (
    <div className="stat-chart-wrapper">
          <div className="charts-wrapper">

          <div className="chart-container">
            <BarChart title={'Weekly Performance'} color={'blue'} />

          </div>
            <NotePad />
          
          </div>
          <div className="stats-container">
          <div className="list-container">
            <List />
          </div>
          <div className="list-container">
          <LineChart title={'Completion Forecast'}  />

          </div>
          
          </div>
          
        </div>
  )
}
