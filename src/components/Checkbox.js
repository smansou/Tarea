import React from 'react'
import './checkbox.css';

export default function Checkbox(props) {
  return (
      <>
    <input onChange={props.onChangeCallback} checked={props.checked} type="checkbox" id="todo"/>   
<label>{props.taskName}</label>
</>
  )
}
