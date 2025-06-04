import { useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container, Typography, CssBaseline, Box } from '@mui/material'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4} from 'uuid'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const [tasks, setTasks] = useState([])

  // atualizar tarefa
  function onTaskClick(taskId){
    const newTask = tasks.map(task =>{
      if (task.id === taskId){
        return{
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    setTasks(newTask)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          width: '100vw',       // ocupa toda a largura da tela
          height: '100vh',      // ocupa toda a altura da tela
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'background.default',
        }}
      >
        <Container maxWidth="md">
          <Box>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              align="center"
              color="primary"
            >
              Gerenciador de Tarefas
            </Typography>
            <AddTask onAddTaskSubmit={onAddTaskSubmit} />
            <Tasks
              tasks={tasks}
              onTaskClick={onTaskClick}
              onDeleteTaskClick={onDeleteTaskClick}
            />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
