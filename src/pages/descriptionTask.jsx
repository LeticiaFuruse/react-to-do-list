import { useSearchParams, useNavigate } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Container, Paper, Typography, Button, Box, Divider, CssBaseline } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'

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

function DescriptionTask() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const navigate = useNavigate()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'background.default',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '800px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ mb: 3 }}>
                        <Button
                            startIcon={<ArrowBack />}
                            onClick={() => navigate("/")}
                            variant="outlined"
                            color="primary"
                        >
                            Voltar
                        </Button>
                    </Box>

                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            align="center"
                            color="primary"
                        >
                            Detalhes da Tarefa
                        </Typography>

                        <Divider sx={{ my: 3, width: '100%' }} />

                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                color="secondary"
                                align="center"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    mt: 3,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.6,
                                    whiteSpace: 'pre-wrap',
                                    textAlign: 'center',
                                    maxWidth: '90%',
                                }}
                            >
                                {description}
                            </Typography>
                        </Box>
                    </Paper>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default DescriptionTask