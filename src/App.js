import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


const App = () => {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'text1 Appointment',
    date:'12/03/22',
    reminder: true
  }, 
  {
    id: 2,
    text: 'text2 Appointment',
    date:'12/03/22',
    reminder: false
  }, 
  {
    id: 3,
    text: 'text3 Appointment',
    date:'12/03/22',
    reminder: false
  },  
  {
    id: 4,
    text: 'text4 Appointment',
    date:'12/03/22',
    reminder: true
  },  
  {
    id: 5,
    text: 'text5 Appointment',
    date:'12/03/22',
    reminder: false
  }
])
  return(
    <div className= 'container'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App