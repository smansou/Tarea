import React from 'react'
import './task.css';

export default function TaskOverview(props) {
  return (
    <div className="task-flex">
      <div className="ui raised card raised-task-card">
  <div className="content">
    <div className="header">{props.name}</div>
    <div className="meta">
      <span className="category">{props.deadline}</span>
    </div>
    <div className="description">
      <p>{props.info}</p>
    </div>
  </div>
  <div className="extra content">
    <div className="right floated author">
      <img className="ui avatar image" src="/images/avatar/small/matt.jpg"/> Matt
    </div>
  </div>
</div>
    </div>

  )
}

