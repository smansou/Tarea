import React from 'react'
import NotePad from './Homepage/Notepad'
import LineChart from './LineChart'
import List from './List'

export default function Overview() {
  return (
    <div className="stat-chart-wrapper">
          <div className="charts-wrapper">

          <div className="chart-container">
            <LineChart />
          </div>
          <div className="notepad">
            <NotePad />
          </div>
          
          </div>
          <div className="stats-container">
          <div className="list-container">
            <List />
          </div>
          <div className="list-container">
           abcde
          </div>
          </div>
        </div>
  )
}
