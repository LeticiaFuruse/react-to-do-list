import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "estudar",
      description: "estudar react",
      isCompleted: false
    },
    {
      id: 2,
      title: "estudar2",
      description: "estudar react",
      isCompleted: false
    },
    {
      id: 3,
      title: "estudar3",
      description: "estudar react",
      isCompleted: false
    }
  ])

  function onTaskClick(taskId){
    const newTask = tasks.map(task =>{
      //preciso atualizar essa tarefa
      if (task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      // não precisa atualizar essa tarefa
        return task
    })

    setTasks(newTask)
  }

  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      {/* <AddTask /> */}
      <Tasks tasks={tasks} onTaskClick={onTaskClick} />
    </>
  )
}

export default App
