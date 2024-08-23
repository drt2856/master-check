import { useNavigate } from "react-router-dom"

export default function Goal({ goal }) {
   
    const navigate= useNavigate()

    return (
        <div className="goal" onClick={()=>navigate("/goal/"+goal.id+"/tab?tab=Detalles")}>
            <h2>
                {goal.title}
            </h2>
            <p>Quedan: días</p>
            <p>Barra de procentaje de cumplimiento aqui</p>
            
        </div>
    )
}