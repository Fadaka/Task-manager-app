import React from 'react'
import Task from './Task'
import { useState } from 'react'

const Tasks = ({ tasks }) => {
  return (
    <>
    {tasks.map((task, index) => (
        <Task key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle} />
    ))}
    </>
  )
}

export default Tasks