
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoal } from "../../goals/hooks/useGoal";

export default function StepGoal({ prevStep, goalId }) {

    const navigate = useNavigate()
    const { editStep } = useGoal()

    const [step, setStep] = useState({ ...prevStep });

    useEffect(() => {
        editStep(step, goalId);
    }, [step]);

    const handleChange = (event) => {
        const { id, checked } = event.target;
        setStep(prevState => ({ ...prevState, [id]: checked }));
    };

    return (<>
        <div className="goal"  >
            <input
                type="checkbox"
                style={{ width: 25, height: 25 }}
                id="checked"
                checked={step?.checked}
                onChange={handleChange}
            />
            <div onClick={() => navigate("/goal/" + goalId + "/step/" + step?.id)}>
                <h3>{step?.title}</h3>
                <p>{step?.description.substring(0, 35)}</p>
            </div>
        </div>
    </>

    )
}