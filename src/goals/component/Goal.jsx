import { useNavigate } from "react-router-dom"

export default function Goal({ goal }) {
   

    return (
        <div className="goal" >
            <h2>
                {goal.title}
            </h2>
            <p>Quedan: días</p>
            <p>Barra de procentaje de cumplimiento aqui</p>
            
        </div>
    )
}