
import { useNavigate } from "react-router-dom";

export default function Note({ note, goalId }) {

    const navigate = useNavigate()

    


// hay que asegurarse de que el date salga con el formato adecuado , cada navegador hace lo que le de la gana con eso
    return (<>
        <div className="goal" onClick={()=>navigate("/goal/"+goalId+"/note/"+note?.id)} >
            <div>
                <h3 className="h4">{(note?.dateCreate+"").substring(0, 10)}</h3>
                <p>{note?.note.substring(0, 35)}</p>
            </div>
        </div>
    </>

    )
}