import React from 'react'
import { useState } from 'react'


const tasks = [{
    id: 1,
    text: 'text2 Appointment',
    day:'12/03/22',
    reminder: true
}, 
{
    id: 1,
    text: 'text3 Appointment',
    day:'12/03/22',
    reminder: false
}, 
{
    id: 1,
    text: 'text4 Appointment',
    day:'12/03/22',
    reminder: false
},  
{
    id: 1,
    text: 'text5 Appointment',
    day:'12/03/22',
    reminder: true
},  
{
    id: 1,
    text: 'text6 Appointment',
    day:'12/03/22',
    reminder: false
}]

const Tasks = () => {
  return (
    <>
    {tasks.map((task) => (
        <h3>{task.text}</h3>
    ))}
    </>
  )
}

export default Tasks