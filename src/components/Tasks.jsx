function Tasks(props){
    return (
            <ul>{props.tasks.map((task) => (
                <li key={task.id}>
                    <button onClick={() => props.onTaskClick(task.id)}
                        >
                        {task.title}
                        {task.isCompleted ? "Concluida" : "Pendente"}
                        </button> 
                    <button>Ver detalhes</button>
                </li>
                ))}
            </ul>
        
    )
}
export default Tasks