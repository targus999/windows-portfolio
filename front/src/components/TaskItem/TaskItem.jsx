import React from 'react'
import "./TaskItem.css"

const TaskItem = ({app}) => {
  return (
    <div className='item'>{app.name}</div>
  )
}

export default TaskItem