import { useNavigate } from 'react-router-dom'
import { List, ListItem, ListItemText, IconButton, Paper, Box, Chip, Container } from '@mui/material'
import { Delete, Info, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material'

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/description?${query.toString()}`)
    }

    return (
        <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper elevation={2} sx={{ p: 3, mt: 2, width: '100%' }}>
                <h1 sx={{ mb: 2 }} align="center">Minhas tarefas</h1>
                <List>
                    {tasks.map((task) => (
                        <ListItem
                            key={task.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2
                            }}
                        >
                            <IconButton 
                                onClick={() => onTaskClick(task.id)}
                                color={task.isCompleted ? "success" : "default"}
                                size="medium"
                            >
                                {task.isCompleted ? <CheckCircle /> : <RadioButtonUnchecked />}
                            </IconButton>
                            
                            <ListItemText 
                                primary={task.title}
                                sx={{
                                    textDecoration: task.isCompleted ? 'line-through' : 'none',
                                    flex: 1
                                }}
                            />
                            
                            <Chip 
                                label={task.isCompleted ? "Concluída" : "Pendente"}
                                color={task.isCompleted ? "success" : "warning"}
                                size="small"
                                sx={{ mx: 2 }}
                            />
                            
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton 
                                    aria-label="detalhes"
                                    onClick={() => onSeeDetailsClick(task)}
                                    color="primary"
                                    size="medium"
                                >
                                    <Info />
                                </IconButton>
                                <IconButton 
                                    aria-label="deletar"
                                    onClick={() => onDeleteTaskClick(task.id)}
                                    color="error"
                                    size="medium"
                                >
                                    <Delete />
                                </IconButton>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
        </Container>
    )
}

export default Tasks