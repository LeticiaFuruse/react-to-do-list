import { useState } from 'react'
import './App.css'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4} from 'uuid'

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

  // atualizar tarefa
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
// ao clicar ele exclui
function onDeleteTaskClick(taskId) {
  const newTasks = tasks.filter(task => task.id !== taskId)
  setTasks(newTasks)
}


// ao clicar no botao ele adiciona tarefa
function onAddTaskSubmit(title, description) {
   const newTask = {
    id: v4(),
    title: title,
    description: description,
    isCompleted: false
   }
   setTasks([...tasks, newTask])
}

  return (
    <>
      <h1>Gerenciador de tarefas</h1>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
    </>
  )
}

export default App
