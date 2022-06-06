import React from 'react'
import LineChart from './LineChart'

export default function Overview() {
  return (
    <div className="stat-chart-wrapper">
          <div className="charts-wrapper">
          <div className="chart-container">
            <LineChart />
          </div>
          <div className="chart-container">
            <LineChart />
          </div>
          <div className="chart-container">
            <LineChart />

          </div>
          </div>
          <div className="stats-container">
            abcd
          </div>
        </div>
  )
}
