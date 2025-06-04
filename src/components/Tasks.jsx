import { useNavigate } from 'react-router-dom'

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

const navigate = useNavigate()

// ao clicar ele redireciona para a pagina de detalhes
function onSeeDetailsClick(task){
    const query = new URLSearchParams()
    query.set("title", task.title)
    query.set("description", task.description)
    navigate(`/description?${query.toString()}`)
}


    return (
            <ul>{tasks.map((task) => (
                <li key={task.id}>
                    <button onClick={() => onTaskClick(task.id)}
                        >
                        {task.title} -
                        {task.isCompleted ? "Concluida" : "Pendente"}
                        </button> 
                    <button onClick={() => onSeeDetailsClick(task)}>Detalhes</button>
                    <button onClick={() => onDeleteTaskClick(task.id)}>Excluir</button>
                </li>
                ))}
            </ul>
        
    )
}
export default Tasks