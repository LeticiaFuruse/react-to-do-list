import { useSearchParams, useNavigate } from "react-router-dom"

function descriptionTask() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get("title")
    const description = searchParams.get("description")

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <button onClick={() => navigate("/") }>Voltar</button>
                <h1>Detalhes da tarefa</h1>
            </div>
            
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>


        </div>
    )
}

export default descriptionTask