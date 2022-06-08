import React from 'react'

export default function List() {
  return (
  
    <table className="ui celled table home-list">
    <thead>
      <tr>
  <th>Name</th>
  <th>Status</th>
  <th>Notes</th>
      </tr>
    </thead>
    <tbody>
     
      <tr>
  <td>My first Project</td>
  <td>In Progress</td>
  <td className="warning">
    <i className="attention icon"></i>
    Attention Needed
  </td>
      </tr>
      <tr>
  <td>Project 3</td>
  <td>In Progress</td>
  <td className="negative">
  <i className="attention icon"></i>
      Attention Needed</td>
      </tr>
      <tr>
  <td>Project</td>
  <td>Completed</td>
  <td className="positive">
    <i className="icon checkmark"></i> Positive
  </td>
      </tr>
      <tr>
  <td>HR Interviews</td>
  <td>Completed</td>
  <td className="positive">
    <i className="icon checkmark"></i> Positive
  </td>
      </tr>
      <tr>
  <td>Product Design Project</td>
  <td>Completed</td>
  <td className="positive">
    <i className="icon checkmark"></i> Positive
  </td>
      </tr>
      <tr className="negative">
  <td>Data Analysis Project</td>
  <td>Value</td>
  <td><i className="icon attention"></i> Attention needed</td>
      </tr>
    </tbody>
  </table>
  
  )
}

