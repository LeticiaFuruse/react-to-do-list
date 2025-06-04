function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
    return (
            <ul>{tasks.map((task) => (
                <li key={task.id}>
                    <button onClick={() => onTaskClick(task.id)}
                        >
                        {task.title} -
                        {task.isCompleted ? "Concluida" : "Pendente"}
                        </button> 
                    <button>Detalhes</button>
                    <button onClick={() => onDeleteTaskClick(task.id)}>Excluir</button>
                </li>
                ))}
            </ul>
        
    )
}
export default Tasks