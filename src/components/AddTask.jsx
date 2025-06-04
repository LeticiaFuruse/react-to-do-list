import { useState } from 'react'

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    return (
        <div>
            <h1>Adicionar tarefa</h1>
            <input type="text" placeholder="Digite o titulo da tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(e) => setDescription(e.target.value)}/>
            <button onClick={() => {
                //verificar se o titutlo e descrição esta preechido 
                if (!title.trim() || !description.trim()) {
                    alert("Preencha o titulo e a descrição da tarefa")
                    return
                }
                onAddTaskSubmit(title, description) 
                setTitle("") 
                setDescription("")}}
                >Adicionar</button>
        </div>
    )
}

export default AddTask