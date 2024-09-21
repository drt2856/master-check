
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

    return (
    <div className="goal align-items-center row">
        <div className="col-auto">
            <input
                type="checkbox"
                style={{ width: 25, height: 25 }}
                id="checked"
                checked={step?.checked}
                onChange={handleChange}
            />
        </div>
        <div className="col" onClick={() => navigate("/goal/" + goalId + "/step/" + step?.id)}>
            <p>{step?.title}</p>
        </div>
    </div>
    

    )
}