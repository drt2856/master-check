
import { useNavigate } from "react-router-dom";

export default function Note({ note, goalId }) {

    const navigate = useNavigate()

    return (<>
        <div className="goal" onClick={()=>navigate("/goal/"+goalId+"/note/"+note?.id)} >
            <div>
                <h3>{(note?.dateCreate+"").substring(0, 10)}</h3>
                <p>{note?.note.substring(0, 35)}</p>
            </div>
        </div>
    </>

    )
}