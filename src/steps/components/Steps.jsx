import { useState } from "react";
import StepGoal from "./StepGoal";
import { StepDetail } from "./StepDetail";

export function Steps({ goal }) {

    const [showModal, setShowModal] = useState("none");

    return (<div id="steps">
        <h2>Pasos</h2>
        {/* deben ser ordenados por el atributo position */}
        {goal?.steps && goal.steps.map(step => (
            <StepGoal step={step} key={step.id} goalId={goal.id}/>
        ))}
        <button
            className="btn btn-primary redounder"
            onClick={() => setShowModal("ADD")}
        >+</button>
        {showModal === "ADD" && <StepDetail setShowModal={setShowModal} goalId={goal.id} />}
        
    </div>)

}