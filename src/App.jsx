import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  
  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      <Tasks/>
      <AddTask/>
    </>
  )
}

export default App
