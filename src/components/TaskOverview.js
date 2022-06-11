import React from 'react'
import './task.css';

export default function TaskOverview(props) {
  return (
    <div className="task-flex">
      <div className="ui raised card raised-task-card">
  <div className="content task-card">
    
    <div className="meta">
      <span className="category">{props.deadline}</span>
    </div>
    <div className="description">
    <h4 className="ui horizontal divider header">
    <div className="ui violet header">{props.name}</div>
</h4>
      <p>{props.info}</p>
    </div>
  </div>
  <div className="extra content">
    <div className="right floated author">
      <img className="ui avatar image" />
    </div>
  </div>
</div>
    </div>

  )
}

