function Tasks(props){
    console.log(props)
    return(
        <div>
            <ul>{props.tasks.map((task => 
                (<li key={task.id}>
                    <button>{task.title}</button> 
                    <button>Ver detalhes</button>
                </li>
                )))}
            </ul>
        </div>
    )
}
export default Tasks