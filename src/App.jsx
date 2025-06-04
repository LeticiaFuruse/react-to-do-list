import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar",
      description: "estudar react"
    },
    {
      id: 1,
      title: "estudar2",
      description: "estudar react"
    },
    {
      id: 1,
      title: "estudar3",
      description: "estudar react"
    }
  ])

  function onTaskClick(taskId){
    const newTask = tasks.map(tasks =>{
      //
      if (task.id == tasksID){
        //
      }
    })
  }

  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      {/* <AddTask /> */}
      <Tasks tasks = {tasks} />
    </>
  )
}

export default App
