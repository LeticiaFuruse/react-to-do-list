import { useState } from 'react'
import { Paper, TextField, Button, Box, Typography, Container } from '@mui/material'
import { Add } from '@mui/icons-material'

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleSubmit = () => {
        if (!title.trim() || !description.trim()) {
            alert("Preencha o título e a descrição da tarefa")
            return
        }
        onAddTaskSubmit(title, description)
        setTitle("")
        setDescription("")
    }

    return (
        <Container 
            maxWidth="md" 
            sx={{ 
                minHeight: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper 
                elevation={3} 
                sx={{ 
                    p: 4,
                    width: '100%',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mx: 'auto'
                }}
            >
                <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom 
                    color="primary"
                    align="center"
                    sx={{ mb: 3 }}
                >
                    Adicionar Tarefa
                </Typography>
                <Box 
                    component="form" 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        alignItems: 'center',
                        width: '100%',
                        gap: 3
                    }}
                >
                    <TextField
                        fullWidth
                        label="Título da Tarefa"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        size="medium"
                    />
                    <TextField
                        fullWidth
                        label="Descrição da Tarefa"
                        variant="outlined"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        multiline
                        rows={3}
                        size="medium"
                    />
                    <Button
                        variant="contained"
                        startIcon={<Add />}
                        onClick={handleSubmit}
                        size="large"
                        sx={{ mt: 1, px: 4 }}
                    >
                        Adicionar
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}

export default AddTask