
import { useNavigate } from "react-router-dom";

export default function StepGoal({ step, goalId }) {

    const navigate = useNavigate()

    return (<>
        <div className="goal" onClick={()=>navigate("/goal/"+goalId+"/step/"+step?.id)} >
            <input type="checkbox" id="checked" checked={step?.checked} />
            <div>
                <h3>{step?.title}</h3>
                <p>{step?.description}</p>
            </div>

        </div>
    </>

    )
}